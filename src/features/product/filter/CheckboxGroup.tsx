import { ChevronDown, ChevronUp } from 'lucide-react'
import { Transition, Checkbox } from '@headlessui/react'
interface CheckboxGroupProps {
  title: string
  items: (string | number)[]
  selectedValues: (string | number)[]
  toggleValue: (val: any) => void
  open: boolean
  toggle: () => void
}

const CheckboxGroup = ({ title, items, open, toggle, selectedValues, toggleValue }: CheckboxGroupProps) => (
  <div className='mb-6 border-b border-gray-200 pb-4'>
    <button className='flex justify-between items-center w-full group' onClick={toggle}>
      <h3 className='font-medium text-gray-800 group-hover:text-primary'>{title}</h3>
      {open ? (
        <ChevronUp size={18} className='text-gray-500 group-hover:text-primary' />
      ) : (
        <ChevronDown size={18} className='text-gray-500 group-hover:text-primary' />
      )}
    </button>

    <Transition show={open} enter='transition-opacity duration-200' leave='transition-opacity duration-200'>
      <div className='mt-3 space-y-2 max-h-60 overflow-y-auto custom-scrollbar'>
        {items.map((item, index) => (
          <Checkbox
            key={index}
            checked={selectedValues.includes(item)}
            onChange={() => toggleValue(item)}
            defaultChecked={false}
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
                <span className='text-md text-gray-700 group-hover:text-primary'>{item}</span>
              </>
            )}
          </Checkbox>
        ))}
      </div>
    </Transition>
  </div>
)

export default CheckboxGroup
