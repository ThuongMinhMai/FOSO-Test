import { ChevronLeft, ChevronRight, ShoppingCart, X } from 'lucide-react'
import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { useCart } from '../../contexts/CartContext'
import { formatPrice } from '../../lib/utils'
function CartDropDown() {
  const [isOpen, setIsOpen] = useState(false)
  const { cartItems, getTotalItems, getTotalPrice, removeFromCart } = useCart()

  function ArrowLeft(props: any) {
    const { onClick } = props
    return (
      <button
        className='absolute z-10 left-[-20px] top-1/3 -translate-y-1/2 bg-blue-50 shadow p-2 rounded-full'
        onClick={onClick}
      >
        <ChevronLeft size={20} className='text-primary hover:text-foreground' />
      </button>
    )
  }

  function ArrowRight(props: any) {
    const { onClick } = props
    return (
      <button
        className='absolute z-10 right-[-20px] top-1/3 -translate-y-1/2 bg-blue-50 shadow p-2 rounded-full'
        onClick={onClick}
      >
        <ChevronRight size={20} className='text-primary hover:text-foreground' />
      </button>
    )
  }
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  }
  return (
    <div className='relative' onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className='relative flex items-center p-2 text-gray-700 hover:text-primary transition-colors duration-200'>
        <ShoppingCart className='w-6 h-6' />
        {getTotalItems() > 0 && (
          <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold'>
            {getTotalItems()}
          </span>
        )}
        <span className='ml-2 font-medium'>Giỏ hàng</span>
      </button>

      {isOpen && (
        <div className='absolute top-full right-0 z-50 w-80 bg-white shadow-2xl border border-gray-200 rounded-lg transition-all duration-300 transform'>
          <div className='p-4'>
            <div className='flex items-center justify-between mb-4'>
              <h3 className='text-lg font-semibold text-gray-800'>Giỏ hàng</h3>
              <span className='bg-red-500 text-white text-xs px-2 py-1 rounded-full'>{getTotalItems()}</span>
            </div>
            {cartItems.length === 0 ? (
              <div className='text-center py-8'>
                <ShoppingCart className='w-12 h-12 text-gray-300 mx-auto mb-3' />
                <p className='text-gray-500'>Giỏ hàng trống</p>
              </div>
            ) : (
              <div className='space-y-4 px-10'>
                <Slider {...settings}>
                  {cartItems.map((item) => (
                    <div className='w-2/3 mx-auto'>
                      <div className='p-2'>
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className={`w-full h-56 rounded-lg object-cover`}
                        />
                      </div>
                      <h3 className='text-sm font-medium text-gray-800 mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200'>
                        {item.product.name}
                      </h3>
                      <div className='flex items-center justify-between mb-2'>
                        <div className='flex flex-col items-start'>
                          <span className='text-lg font-bold text-red-600'>{formatPrice(item.product.price)}</span>
                          {item.product.originalPrice && (
                            <div className='flex gap-1 justify-center items-center'>
                              <span className='text-md text-gray-400 line-through'>
                                {formatPrice(item.product.originalPrice)}
                              </span>
                              <span className='text-xs font-medium text-red-600'>{item.product.discount}%</span>
                            </div>
                          )}
                          <div className='flex items-center space-x-2'>
                            <span className='text-xs text-gray-500'>SL: {item.quantity}</span>
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className='text-gray-400 hover:text-red-500 transition-colors duration-200'
                            >
                              <X className='w-4 h-4' />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>

                <div className='border-t border-gray-200 pt-4'>
                  <div className='flex items-center justify-between mb-3'>
                    <span className='font-semibold text-gray-800'>Tổng cộng:</span>
                    <span className='font-bold text-red-600 text-lg'>{formatPrice(getTotalPrice())}</span>
                  </div>

                  <button className='w-full bg-blue-50 hover:text-primary text-primary py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center'>
                    Mua ngay
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default CartDropDown
