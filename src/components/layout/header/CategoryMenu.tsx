import { Menu as MenuIcon, ChevronDown, ChevronRight, ChevronsRight } from 'lucide-react'
import { categories } from '../../../data/mockData'
import ProductCard from '../../../features/product/ProductCard'

interface CategoryMenuProps {
  hoveredCategory: string | null
  setHoveredCategory: (id: string | null) => void
  isMenuOpen: boolean
  onOpenMenu: () => void
  onCloseMenu: () => void
}

const CategoryMenu = ({
  hoveredCategory,
  setHoveredCategory,
  isMenuOpen,
  onOpenMenu,
  onCloseMenu
}: CategoryMenuProps) => {
  const getCurrentCategory = () => {
    return categories.find((cat) => cat.id === hoveredCategory)
  }

  return (
    <div className='relative' onMouseEnter={onOpenMenu} onMouseLeave={onCloseMenu}>
      <button
        className={`flex items-center space-x-2 px-2 py-2 text-white hover:bg-secondary rounded-lg transition-colors ${
          isMenuOpen ? 'bg-secondary' : 'bg-primary'
        }`}
      >
        <MenuIcon size={18} />
        <span>Danh mục sản phẩm</span>
        <ChevronDown size={16} className={`transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
      </button>

      {isMenuOpen && (
        <div className='absolute bg-gray-100 left-0 top-full z-50 text-gray-800 shadow-2xl rounded-lg border flex w-[80vw]'>
          <div className='w-1/3 bg-white'>
            {categories.map((category) => (
              <div key={category.id}>
                <button
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  className={`w-full flex items-center justify-between px-3 py-4 hover:bg-gray-100 hover:text-secondary transition-colors text-left rounded ${
                    hoveredCategory === category.id ? 'bg-gray-100 text-secondary' : ''
                  }`}
                >
                  <div className='flex items-center space-x-3'>
                    <img src={category.image} alt={category.name} className='w-8 h-8 rounded object-cover' />
                    <span className='font-medium'>{category.name}</span>
                  </div>
                  <ChevronRight size={14} className='text-gray-400 hover:text-secondary' />
                </button>
              </div>
            ))}
          </div>

          {hoveredCategory && (
            <div className='w-full mx-10 mb-10'>
              <div className='grid grid-cols-3 gap-6 mt-2'>
                {getCurrentCategory()?.subcategories?.map((sub) => (
                  <a
                    key={sub.id}
                    href='#'
                    className='flex items-center gap-4 py-4 px-6 bg-white hover:bg-blue-50 rounded-lg transition-colors'
                  >
                    <img src={sub.image} alt={sub.name} className='w-12 h-12 rounded object-cover' />
                    <span>{sub.name}</span>
                  </a>
                ))}
              </div>

              <div className='h-[0.2px] bg-gray-300 my-4'></div>

              <div>
                <div className='flex justify-between items-center'>
                  <h3 className='font-medium text-2xl mb-3 text-black'>Sản phẩm bán chạy </h3>
                  <div className='flex items-center gap-2 cursor-pointer text-primary hover:text-secondary'>
                    <span className='font-semibold'>Xem tất cả</span>
                    <ChevronsRight className='w-4 h-4 mr-1' strokeWidth={3} />
                  </div>
                </div>
                <div className='grid grid-cols-5 gap-4 mt-2'>
                  {getCurrentCategory()?.featuredProducts?.map((product) => (
                    <ProductCard product={product} size='28' key={product.id} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default CategoryMenu
