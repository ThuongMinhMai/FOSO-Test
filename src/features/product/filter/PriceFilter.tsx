import { ChevronDown, ChevronUp } from 'lucide-react'
import { RadioGroup, Radio, Transition } from '@headlessui/react'

const priceRanges = [
  { label: 'Dưới 100.000đ', min: 0, max: 99999 },
  { label: '100.000đ - 300.000đ', min: 100000, max: 300000 },
  { label: '300.000đ - 500.000đ', min: 300001, max: 500000 },
  { label: 'Trên 500.000đ', min: 500001, max: Infinity }
]

interface PriceFilterProps {
  open: boolean
  toggle: () => void
}

const PriceFilter = ({ open, toggle }: PriceFilterProps) => (
  <div className='text-md mb-6 border-b border-gray-200 pb-4'>
    <button className='flex justify-between items-center w-full group' onClick={toggle}>
      <h3 className='font-medium text-gray-800 group-hover:text-primary'>Khoảng giá</h3>
      {open ? (
        <ChevronUp size={18} className='text-gray-500 group-hover:text-primary' />
      ) : (
        <ChevronDown size={18} className='text-gray-500 group-hover:text-primary' />
      )}
    </button>

    <Transition show={open} enter='transition-opacity duration-200' leave='transition-opacity duration-200'>
      <div className='mt-3 grid grid-cols-1 gap-2'>
        <RadioGroup>
          {priceRanges.map((range, index) => (
            <Radio key={index} value={range} className='focus:outline-none'>
              {({ checked }) => (
                <div
                  className={`relative px-4 mb-2 py-2 text-md text-center rounded-md border cursor-pointer ${
                    checked ? 'bg-blue-50 border-primary text-primary' : 'bg-white border-gray-300 text-gray-800'
                  }`}
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
)

export default PriceFilter
