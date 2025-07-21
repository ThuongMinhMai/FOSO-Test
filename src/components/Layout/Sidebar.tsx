import { Filter, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { categories, products } from '../../data/mockData'
import { RadioGroup, Transition } from '@headlessui/react'
import { Checkbox, Radio } from '@headlessui/react'

function Sidebar() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    category: true,
    price: true,
    brand: true,
    year: true,
    country: true
  })

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const brands = [...new Set(products.map((p) => p.brand))]
  const years = [...new Set(products.map((p) => p.year))].sort((a, b) => b - a)
  const countries = [...new Set(products.map((p) => p.country))]

  const priceRanges = [
    { label: 'Dưới 100.000đ', min: 0, max: 99999 },
    { label: '100.000đ - 300.000đ', min: 100000, max: 300000 },
    { label: '300.000đ - 500.000đ', min: 300001, max: 500000 },
    { label: 'Trên 500.000đ', min: 500001, max: Infinity }
  ]

  return (
    <aside className='w-72 bg-white border-r border-gray-200 h-screen sticky top-0 overflow-y-auto p-4'>
      <div className='flex items-center justify-between mb-6'>
        <div className='flex items-center'>
          <Filter className='mr-2 text-blue-600' size={20} />
          <h2 className='text-lg font-semibold text-gray-800'>Bộ lọc sản phẩm</h2>
        </div>
        <button className='text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200'>Đặt lại</button>
      </div>

      {/* Category Filter */}
      <div className='mb-6 border-b border-gray-200 pb-4'>
        <button className='flex justify-between items-center w-full group' onClick={() => toggleSection('category')}>
          <h3 className='font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200'>
            Danh mục
          </h3>
          {openSections.category ? (
            <ChevronUp size={18} className='text-gray-500 group-hover:text-blue-600 transition-colors duration-200' />
          ) : (
            <ChevronDown size={18} className='text-gray-500 group-hover:text-blue-600 transition-colors duration-200' />
          )}
        </button>

        <Transition
          show={openSections.category}
          enter='transition-opacity duration-200'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='mt-3 space-y-2'>
            {categories.map((category) => (
              <div key={category.id} className='pl-2'>
                <Checkbox defaultChecked={false} className='group flex items-center focus:outline-none'>
                  {({ checked }) => (
                    <>
                      <div
                        className={`flex items-center justify-center w-4 h-4 border rounded mr-2 transition-colors duration-200 ${
                          checked ? 'bg-blue-600 border-blue-600' : 'border-gray-300 group-hover:border-blue-400'
                        }`}
                      >
                        {checked && (
                          <svg className='w-3 h-3 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                          </svg>
                        )}
                      </div>
                      <span className=' text-gray-700 group-hover:text-blue-600 transition-colors duration-200'>
                        {category.name}
                      </span>
                    </>
                  )}
                </Checkbox>

                {category.subcategories && (
                  <Transition
                    show={openSections.category}
                    enter='transition-all duration-200'
                    enterFrom='opacity-0 max-h-0'
                    enterTo='opacity-100 max-h-96'
                    leave='transition-all duration-200'
                    leaveFrom='opacity-100 max-h-96'
                    leaveTo='opacity-0 max-h-0'
                  >
                    <div className='ml-4 mt-1 space-y-1'>
                      {category.subcategories.map((sub, i) => (
                        <Checkbox key={i} defaultChecked={false} className='group flex items-center focus:outline-none'>
                          {({ checked }) => (
                            <>
                              <div
                                className={`flex items-center justify-center w-4 h-4 border rounded mr-2 transition-colors duration-200 ${
                                  checked
                                    ? 'bg-blue-600 border-blue-600'
                                    : 'border-gray-300 group-hover:border-blue-400'
                                }`}
                              >
                                {checked && (
                                  <svg
                                    className='w-3 h-3 text-white'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                  >
                                    <path
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                      strokeWidth={2}
                                      d='M5 13l4 4L19 7'
                                    />
                                  </svg>
                                )}
                              </div>
                              <span className='text-sm text-gray-600 group-hover:text-blue-600 transition-colors duration-200'>
                                {sub.name}
                              </span>
                            </>
                          )}
                        </Checkbox>
                      ))}
                    </div>
                  </Transition>
                )}
              </div>
            ))}
          </div>
        </Transition>
      </div>

      {/* Price Filter */}
      <div className='mb-6 border-b border-gray-200 pb-4'>
        <button className='flex justify-between items-center w-full group' onClick={() => toggleSection('price')}>
          <h3 className='font-medium text-gray-800 group-hover:text-primary transition-colors duration-200'>
            Khoảng giá
          </h3>
          {openSections.price ? (
            <ChevronUp size={18} className='text-gray-500 group-hover:text-primary transition-colors duration-200' />
          ) : (
            <ChevronDown size={18} className='text-gray-500 group-hover:text-primary transition-colors duration-200' />
          )}
        </button>

        <Transition
          show={openSections.price}
          enter='transition-opacity duration-200'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='mt-3 grid grid-cols-1 gap-2'>
            <RadioGroup>
              {priceRanges.map((range, index) => (
                <Radio key={index} value={range} className='focus:outline-none'>
                  {({ checked }) => (
                    <div
                      className={`relative w-full px-4 py-2 text-sm  mb-1 text-center rounded-md border transition-all duration-200 cursor-pointer
                ${checked ? 'bg-blue-50 border-primary text-primary' : 'bg-white border-gray-300 text-gray-800 hover:border-secondary'}
                `}
                    >
                      {range.label}

                      {checked && (
                        <div className='absolute top-0 right-0 w-5 h-5 bg-primary rounded-tr-md flex items-center justify-center'>
                          <svg className='w-3 h-3 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                          </svg>
                        </div>
                      )}
                    </div>
                  )}
                </Radio>
              ))}
            </RadioGroup>
          </div>
        </Transition>
      </div>

      {/* Brand Filter */}
      <div className='mb-6 border-b border-gray-200 pb-4'>
        <button className='flex justify-between items-center w-full group' onClick={() => toggleSection('brand')}>
          <h3 className='font-medium text-gray-800 group-hover:text-primary transition-colors duration-200'>
            Thương hiệu
          </h3>
          {openSections.brand ? (
            <ChevronUp size={18} className='text-gray-500 group-hover:text-primary transition-colors duration-200' />
          ) : (
            <ChevronDown size={18} className='text-gray-500 group-hover:text-primary transition-colors duration-200' />
          )}
        </button>

        <Transition
          show={openSections.brand}
          enter='transition-opacity duration-200'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='mt-3 space-y-2 max-h-60 overflow-y-auto custom-scrollbar'>
            {brands.map((brand, index) => (
              <Checkbox key={index} defaultChecked={false} className='group flex items-center focus:outline-none'>
                {({ checked }) => (
                  <>
                    <div
                      className={`flex items-center justify-center w-4 h-4 border rounded mr-2 transition-colors duration-200 ${
                        checked ? 'bg-primary border-primary' : 'border-gray-300 group-hover:border-secondary'
                      }`}
                    >
                      {checked && (
                        <svg className='w-3 h-3 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                        </svg>
                      )}
                    </div>
                    <span className='text-sm text-gray-700 group-hover:text-primary transition-colors duration-200'>
                      {brand}
                    </span>
                  </>
                )}
              </Checkbox>
            ))}
          </div>
        </Transition>
      </div>

      {/* Year Filter */}
      <div className='mb-6 border-b border-gray-200 pb-4'>
        <button className='flex justify-between items-center w-full group' onClick={() => toggleSection('year')}>
          <h3 className='font-medium text-gray-800 group-hover:text-primary transition-colors duration-200'>
            Năm sản xuất
          </h3>
          {openSections.year ? (
            <ChevronUp size={18} className='text-gray-500 group-hover:text-primary transition-colors duration-200' />
          ) : (
            <ChevronDown size={18} className='text-gray-500 group-hover:text-primary transition-colors duration-200' />
          )}
        </button>

        <Transition
          show={openSections.year}
          enter='transition-opacity duration-200'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='mt-3 space-y-2 max-h-60 overflow-y-auto custom-scrollbar'>
            {years.map((year, index) => (
              <Checkbox key={index} defaultChecked={false} className='group flex items-center focus:outline-none'>
                {({ checked }) => (
                  <>
                    <div
                      className={`flex items-center justify-center w-4 h-4 border rounded mr-2 transition-colors duration-200 ${
                        checked ? 'bg-primary border-primary' : 'border-gray-300 group-hover:border-secondary'
                      }`}
                    >
                      {checked && (
                        <svg className='w-3 h-3 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                        </svg>
                      )}
                    </div>
                    <span className='text-sm text-gray-700 group-hover:text-primary transition-colors duration-200'>
                      {year}
                    </span>
                  </>
                )}
              </Checkbox>
            ))}
          </div>
        </Transition>
      </div>

      {/* Country Filter */}
      <div className='mb-6'>
        <button className='flex justify-between items-center w-full group' onClick={() => toggleSection('country')}>
          <h3 className='font-medium text-gray-800 group-hover:text-primary transition-colors duration-200'>Xuất xứ</h3>
          {openSections.country ? (
            <ChevronUp size={18} className='text-gray-500 group-hover:text-primary transition-colors duration-200' />
          ) : (
            <ChevronDown size={18} className='text-gray-500 group-hover:text-primary transition-colors duration-200' />
          )}
        </button>

        <Transition
          show={openSections.country}
          enter='transition-opacity duration-200'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='mt-3 space-y-2 max-h-60 overflow-y-auto custom-scrollbar'>
            {countries.map((country, index) => (
              <Checkbox key={index} defaultChecked={false} className='group flex items-center focus:outline-none'>
                {({ checked }) => (
                  <>
                    <div
                      className={`flex items-center justify-center w-4 h-4 border rounded mr-2 transition-colors duration-200 ${
                        checked ? 'bg-primary border-prbg-primary' : 'border-gray-300 group-hover:border-secondary'
                      }`}
                    >
                      {checked && (
                        <svg className='w-3 h-3 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                        </svg>
                      )}
                    </div>
                    <span className='text-sm text-gray-700 group-hover:text-primary transition-colors duration-200'>
                      {country}
                    </span>
                  </>
                )}
              </Checkbox>
            ))}
          </div>
        </Transition>
      </div>
    </aside>
  )
}

export default Sidebar
