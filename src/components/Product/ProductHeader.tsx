import { ChevronDownIcon } from 'lucide-react'
import React, { useState } from 'react'
import { TagButton } from './TagButton' // <-- chỉnh đường dẫn đúng theo vị trí file

const ProductHeader: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Liên quan')
  const [priceSort, setPriceSort] = useState('Giá: Thấp → Cao')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const filterOptions = ['Liên quan', 'Bán chạy', 'Mới nhất', 'Nổi bật']
  const priceOptions = ['Giá: Thấp → Cao', 'Giá: Cao → Thấp']

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter)
  }

  const handlePriceSort = (option: string) => {
    setPriceSort(option)
    setIsDropdownOpen(false)
  }

  return (
    <div className='w-full border-b bg-white border-gray-200 sticky top-48 z-10'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between py-4'>
          <h1 className='text-lg font-medium text-gray-800'>Danh sách sản phẩm</h1>

          <div className='hidden md:flex items-center space-x-2'>
            {filterOptions.map((filter) => (
              <TagButton
                key={filter}
                label={filter}
                active={activeFilter === filter}
                onClick={() => handleFilterClick(filter)}
              />
            ))}
          </div>

          <div className='relative'>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className='flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors duration-200'
            >
              <span>{priceSort}</span>
              <ChevronDownIcon
                className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isDropdownOpen && (
              <div className='absolute right-0 top-full mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-20'>
                {priceOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handlePriceSort(option)}
                    className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-50 transition-colors duration-150 ${
                      priceSort === option ? 'text-blue-500 bg-blue-50' : 'text-gray-700'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile filter buttons */}
        <div className='md:hidden pb-3'>
          <div className='flex items-center space-x-2 overflow-x-auto'>
            {filterOptions.map((filter) => (
              <TagButton
                key={filter}
                label={filter}
                active={activeFilter === filter}
                onClick={() => handleFilterClick(filter)}
              />
            ))}
          </div>
        </div>
      </div>

      {isDropdownOpen && <div className='fixed inset-0 bg-transparent z-10' onClick={() => setIsDropdownOpen(false)} />}
    </div>
  )
}

export default ProductHeader
