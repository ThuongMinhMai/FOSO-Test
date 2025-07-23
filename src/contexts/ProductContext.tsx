import { createContext, useContext, useState, useCallback, ReactNode, useMemo } from 'react'
import { FilterType, Product, SortType } from '../types'
import { products as mockProducts } from '../data/mockData'

const PRODUCTS_PER_PAGE = 8

interface ProductContextType {
  products: Product[]
  isLoading: boolean
  hasMore: boolean
  loadProducts: () => void
  resetProducts: () => void
  setFilter: (filter: FilterType) => void
  setSort: (sort: SortType) => void
  searchTerm: string
  setSearchTerm: (term: string) => void
  selectedCategories: string[]
  toggleCategory: (categoryId: string) => void
}

const ProductContext = createContext<ProductContextType | undefined>(undefined)

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(0)
  const [filter, setFilter] = useState<FilterType>('Liên quan')
  const [sort, setSort] = useState<SortType>('Giá: Thấp → Cao')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const simulateApiCall = useCallback((pageNum: number): Promise<Product[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const startIndex = pageNum * PRODUCTS_PER_PAGE
        const endIndex = startIndex + PRODUCTS_PER_PAGE
        const pageProducts = mockProducts.slice(startIndex, endIndex)
        resolve(pageProducts)
      }, 300)
    })
  }, [])

  const loadProducts = useCallback(async () => {
    if (isLoading || !hasMore) return

    setIsLoading(true)
    try {
      const newProducts = await simulateApiCall(page)

      if (newProducts.length === 0) {
        setHasMore(false)
      } else {
        setProducts((prev) => {
          const uniqueNewProducts = newProducts.filter(
            (newProduct) => !prev.some((product) => product.id === newProduct.id)
          )
          return [...prev, ...uniqueNewProducts]
        })

        setPage((prev) => prev + 1)
        setHasMore((page + 1) * PRODUCTS_PER_PAGE < mockProducts.length)
      }
    } catch (error) {
      console.error('Error loading products:', error)
    } finally {
      setIsLoading(false)
    }
  }, [isLoading, hasMore, page, simulateApiCall])

  const resetProducts = useCallback(() => {
    setProducts([])
    setPage(0)
    setHasMore(true)
    setIsLoading(false)
  }, [])

  const filteredProducts = useMemo(() => {
    console.log('omd', selectedCategories)
    let result = [...products]
    if (searchTerm.trim() !== '') {
      result = result.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }
    if (selectedCategories.length > 0) {
      result = result.filter((product) => selectedCategories.includes(product.category))
      console.log("filter", result)
    }
    switch (filter) {
      case 'Nổi bật':
        result = result.filter((p) => p.featured)
        break
      default:
        break
    }

    if (filter === 'Mới nhất') {
      result = result.sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime()
        const dateB = new Date(b.createdAt).getTime()

        if (isNaN(dateA) || isNaN(dateB)) return 0

        return dateB - dateA
      })
      console.log('Sorted by Mới nhất', result)
    } else if (filter === 'Bán chạy') {
      result = result.sort((a, b) => (b.sold ?? 0) - (a.sold ?? 0))
      console.log('Sorted by Bán chạy', result)
    } else {
      if (sort === 'Giá: Thấp → Cao') {
        result.sort((a, b) => a.price - b.price)
      } else {
        result.sort((a, b) => b.price - a.price)
      }
    }

    return result
  }, [products, filter, sort, searchTerm, selectedCategories])
  const toggleCategory = useCallback((categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId]
    )
  }, [])
  return (
    <ProductContext.Provider
      value={{
        products: filteredProducts,
        isLoading,
        hasMore,
        loadProducts,
        resetProducts,
        setFilter,
        setSort,
        searchTerm,
        setSearchTerm,
        selectedCategories,
        toggleCategory
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProductContext = () => {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider')
  }
  return context
}
