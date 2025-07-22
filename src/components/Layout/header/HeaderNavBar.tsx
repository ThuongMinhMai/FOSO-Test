import { Clock, HandCoins, RefreshCcw, Truck } from 'lucide-react'
import { useState } from 'react'
import CategoryMenu from './CategoryMenu'

const HeaderNavBar = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className=''>
      <div className='flex justify-between items-center mx-auto max-w-7xl'>
        <div className='flex items-center h-12'>
          <CategoryMenu
            hoveredCategory={hoveredCategory}
            setHoveredCategory={setHoveredCategory}
            isMenuOpen={isMenuOpen}
            onOpenMenu={() => setIsMenuOpen(true)}
            onCloseMenu={() => setIsMenuOpen(false)}
          />
          <div className='flex items-center space-x-4 ml-4'>
            {['Về chúng tôi', 'Bài viết', 'Catalog', 'Liên hệ'].map((text, idx) => (
              <a key={idx} href='#' className='hover:text-secondary font-medium transition-colors'>
                {text}
              </a>
            ))}
          </div>
        </div>

        <div className='flex items-center space-x-4'>
          {[
            { icon: <Clock className='w-4 h-4 mr-1 text-primary' strokeWidth={3} />, text: 'Hỗ trợ 24/7' },
            { icon: <HandCoins className='w-4 h-4 mr-1 text-primary' strokeWidth={3} />, text: 'Miễn phí vận chuyển' },
            { icon: <Truck className='w-4 h-4 mr-1 text-primary' strokeWidth={3} />, text: 'Giao hàng nhanh 24h' },
            { icon: <RefreshCcw className='w-4 h-4 mr-1 text-primary' strokeWidth={3} />, text: '30 ngày đổi trả' }
          ].map((item, idx) => (
            <div key={idx} className='flex items-center'>
              {item.icon}
              <span className='font-semibold'>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default HeaderNavBar
