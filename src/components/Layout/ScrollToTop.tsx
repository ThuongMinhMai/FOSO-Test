import { ChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-5 right-5 z-50 bg-primary hover:bg-secondary text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110'
          aria-label='Scroll to top'
        >
          <ChevronUp className='w-6 h-6' />
        </button>
      )}
    </>
  )
}

export default ScrollToTop
