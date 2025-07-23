import { ChevronDown, ChevronUp } from 'lucide-react'
import { Transition, Checkbox } from '@headlessui/react'
import { useProductContext } from '../../../contexts/ProductContext'

interface CategoryFilterProps {
  categories: any[]
  open: boolean
  toggle: () => void
}

const CategoryFilter = ({ categories, open, toggle }: CategoryFilterProps) => {
  const { selectedCategories, toggleCategory } = useProductContext()

  return (
    <div className='text-md mb-6 border-b border-gray-200 pb-4'>
      <button className='flex justify-between items-center w-full group' onClick={toggle}>
        <h3 className='font-medium text-gray-800 group-hover:text-primary transition-colors duration-200'>Danh mục</h3>
        {open ? (
          <ChevronUp size={18} className='text-gray-500 group-hover:text-primary' />
        ) : (
          <ChevronDown size={18} className='text-gray-500 group-hover:text-primary' />
        )}
      </button>

      <Transition show={open} enter='transition-opacity duration-200' leave='transition-opacity duration-200'>
        <div className='mt-3 space-y-2'>
          {categories.map((category) => (
            <div key={category.id} className='pl-2'>
              <Checkbox
                checked={selectedCategories.includes(category.name)}
                onChange={() => toggleCategory(category.name)}
                className='group flex items-center'
              >
                {({ checked }) => (
                  <>
                    <div
                      className={`w-4 h-4 border rounded mr-2 flex items-center justify-center ${
                        checked ? 'bg-primary border-primary' : 'border-gray-300'
                      }`}
                    >
                      {checked && (
                        <svg className='w-3 h-3 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                        </svg>
                      )}
                    </div>
                    <span className='text-gray-700 group-hover:text-primary'>{category.name}</span>
                  </>
                )}
              </Checkbox>

              {category.subcategories && (
                <div className='ml-4 mt-1 space-y-1'>
                  {category.subcategories.map((sub: any, idx: number) => (
                    <Checkbox
                      key={idx}
                      checked={selectedCategories.includes(sub.name)}
                      onChange={() => toggleCategory(sub.name)}
                      className='group flex items-center'
                    >
                      {({ checked }) => (
                        <>
                          <div
                            className={`w-4 h-4 border rounded mr-2 flex items-center justify-center ${
                              checked ? 'bg-primary border-primary' : 'border-gray-300'
                            }`}
                          >
                            {checked && (
                              <svg className='w-3 h-3 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                              </svg>
                            )}
                          </div>
                          <span className='text-sm text-gray-600 group-hover:text-primary'>{sub.name}</span>
                        </>
                      )}
                    </Checkbox>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Transition>
    </div>
  )
}

export default CategoryFilter
