import { useState, useCallback } from 'react';
import { Product } from '../types';
import { products as mockProducts } from '../data/mockData'; 

const PRODUCTS_PER_PAGE = 8;
export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const simulateApiCall = useCallback((pageNum: number): Promise<Product[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const startIndex = pageNum * PRODUCTS_PER_PAGE;
        const endIndex = startIndex + PRODUCTS_PER_PAGE;
        const pageProducts = mockProducts.slice(startIndex, endIndex);
        console.log(`API call - page ${pageNum}:`, pageProducts);
        resolve(pageProducts);
      }, 300);
    });
  }, []);

  const loadProducts = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    try {
      const newProducts = await simulateApiCall(page);
      console.log('New products loaded:', newProducts);

      if (newProducts.length === 0) {
        setHasMore(false);
      } else {
        setProducts(prev => {
          const uniqueNewProducts = newProducts.filter(
            newProduct => !prev.some(product => product.id === newProduct.id)
          );
          const updatedProducts = [...prev, ...uniqueNewProducts];
          console.log('All products after update:', updatedProducts);
          return updatedProducts;
        });
        
        setPage(prev => prev + 1);
        setHasMore((page + 1) * PRODUCTS_PER_PAGE < mockProducts.length);
      }
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setIsLoading(false);
    }
  }, [page, isLoading, hasMore, simulateApiCall]);

  const resetProducts = useCallback(() => {
    setProducts([]);
    setPage(0);
    setHasMore(true);
    setIsLoading(false);
  }, []);

  return {
    products,
    isLoading,
    hasMore,
    loadProducts,
    resetProducts
  };
};
