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
  selectedPriceRange: { min: number; max: number } | null
  setSelectedPriceRange: (range: { min: number; max: number } | null) => void
  selectedBrands: string[]
  toggleBrand: (brand: string) => void
  selectedYears: number[]
  toggleYear: (year: number) => void
  selectedCountries: string[]
  toggleCountry: (country: string) => void
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
  const [selectedPriceRange, setSelectedPriceRange] = useState<{ min: number; max: number } | null>(null)
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedYears, setSelectedYears] = useState<number[]>([])
  const [selectedCountries, setSelectedCountries] = useState<string[]>([])

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
    let result = [...products]
    if (searchTerm.trim() !== '') {
      result = result.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }
    if (selectedCategories.length > 0) {
      result = result.filter((product) => selectedCategories.includes(product.category))
    }
    if (selectedPriceRange) {
      const { min, max } = selectedPriceRange
      result = result.filter((product) => product.price >= min && product.price <= max)
    }
    if (selectedBrands.length > 0) {
      result = result.filter((product) => selectedBrands.includes(product.brand))
    }

    if (selectedYears.length > 0) {
      result = result.filter((product) => selectedYears.includes(product.year))
    }

    if (selectedCountries.length > 0) {
      result = result.filter((product) => selectedCountries.includes(product.country))
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
    } else if (filter === 'Bán chạy') {
      result = result.sort((a, b) => (b.sold ?? 0) - (a.sold ?? 0))
    } else {
      if (sort === 'Giá: Thấp → Cao') {
        result.sort((a, b) => a.price - b.price)
      } else {
        result.sort((a, b) => b.price - a.price)
      }
    }

    return result
  }, [
    products,
    filter,
    sort,
    searchTerm,
    selectedCategories,
    selectedPriceRange,
    selectedBrands,
    selectedCountries,
    selectedYears
  ])
  const toggleCategory = useCallback((categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId]
    )
  }, [])
  const toggleBrand = useCallback((brand: string) => {
    setSelectedBrands((prev) => (prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]))
  }, [])

  const toggleYear = useCallback((year: number) => {
    setSelectedYears((prev) => (prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]))
  }, [])

  const toggleCountry = useCallback((country: string) => {
    setSelectedCountries((prev) => (prev.includes(country) ? prev.filter((c) => c !== country) : [...prev, country]))
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
        toggleCategory,
        selectedPriceRange,
        setSelectedPriceRange,
        selectedBrands,
        toggleBrand,
        selectedYears,
        toggleYear,
        selectedCountries,
        toggleCountry
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
