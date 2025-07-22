import { Check } from 'lucide-react'

interface TagButtonProps {
  label: string
  active?: boolean
  onClick?: () => void
}

export const TagButton = ({ label, active = false, onClick }: TagButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative px-4 py-1.5 rounded-lg text-sm font-medium
        ${active ? 'bg-white text-primary border border-primary hover:bg-blue-50 ' : 'bg-blue-50 text-black'}
        transition-all duration-200 ease-in-out
        overflow-hidden
      `}
    >
      {label}
      {active && (
        <>
          <div
            className='absolute top-0 right-0 w-0 h-0 
              border-l-[26px] border-l-transparent
              border-t-[26px] border-t-primary
              border-r-0 border-b-0'
          ></div>
          <Check className='absolute top-0.5 right-0.5 w-3 h-3 text-white' strokeWidth={3} />
        </>
      )}
    </button>
  )
}
