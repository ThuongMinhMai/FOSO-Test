import {
  BadgePercent,
  Camera,
  ChevronDown,
  ChevronRight,
  ChevronsRight,
  CircleUserRound,
  Clock,
  HandCoins,
  Menu as MenuIcon,
  Phone,
  RefreshCcw,
  Search,
  ShoppingCart,
  Smartphone,
  Truck
} from 'lucide-react'
import { useState } from 'react'
import logo from '../../assets/logo.png'
import { categories } from '../../data/mockData'
import ProductCard from '../Product/ProductCard'
import CartDropDown from './CartDropDown'
import { useCart } from '../../contexts/CartContext'

const Header = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  const getCurrentCategory = () => {
    return categories.find((cat) => cat.id === hoveredCategory)
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartItems } = useCart()
  const handleOpenMenu = () => {
    setIsMenuOpen(true)
  }

  const handleCloseMenu = () => {
    setIsMenuOpen(false)
  }
  return (
    <header className=' bg-white shadow-sm border-b border-gray-200 text-black'>
      {/* Top banner */}
      <div className='bg-gradient-to-r from-primary via-foreground to-primary text-white py-2'>
        <div className='max-w-7xl mx-auto px-4 flex items-center justify-between text-sm'>
          <div className='flex items-center space-x-6'>
            <div className='flex items-center'>
              <BadgePercent className='w-4 h-4 mr-1 text-secondary' fill='white' />
              <span>
                Nhập mã <span className='text-yellow-400 font-bold'>NEWBIE</span> giảm ngay 10% cho lần đầu mua hàng.
              </span>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center gap-2'>
              <Phone className='w-4 h-4 mr-1' fill='white' />
              <span>
                Hotline: <span className='text-yellow-400 font-semibold'>0283 760 7607</span>
              </span>
            </div>
            <div className='flex items-center'>
              <Smartphone className='w-4 h-4 mr-1 text-secondary' fill='white' />
              <span>Tải ứng dụng</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className='fixed top-0 left-0 w-full z-50 bg-white shadow'>
        <div className='max-w-7xl mx-auto px-4 py-10 top-0 z-50 bg-white'>
          <div className='container mx-auto px-4'>
            <div className='flex items-center justify-between h-16'>
              <div className='flex items-center'>
                <img src={logo} alt='logo' className='h-20 mr-2' />
              </div>

              <div className='flex-1 max-w-xl mx-8'>
                <div className='relative'>
                  <input
                    type='text'
                    placeholder='Tìm kiếm sản phẩm...'
                    className='w-full h-12 px-4 py-2 pl-4 pr-12 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent'
                  />
                  <div className='absolute right-2 top-1/2 transform -translate-y-1/2'>
                    <button className='text-black hover:text-primary mr-4'>
                      <Camera size={24} />
                    </button>
                    <button className='rounded-3xl px-5 bg-secondary text-white p-2 hover:bg-primary transition-colors'>
                      <Search size={24} />
                    </button>
                  </div>
                </div>
              </div>

              <div className='flex items-center text-black space-x-6'>
                <button className='flex items-center space-x-1'>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/800px-Flag_of_Vietnam.svg.png'
                    className='h-7 w-7 rounded-full object-cover'
                    alt='Vietnam flag'
                  />
                  <span className='hidden md:inline'>VI</span>
                </button>
                {/* <button className='flex gap-2 items-center space-x-1 hover:text-secondary transition-colors'>
                  <div className='relative'>
                    <ShoppingCart size={28} strokeWidth={1.5} className='text-primary' fill='#0f5dd4' />
                    <span className='absolute -top-3 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                      {cartItems.length}
                    </span>
                  </div>
                  <span className='hidden md:inline font-medium'>Giỏ hàng</span>
                </button> */}
                <CartDropDown />
                <button className='flex items-center space-x-1 hover:text-secondary transition-colors'>
                  <CircleUserRound size={28} className='text-primary' strokeWidth={1.5} />
                  <span className='hidden md:inline font-medium'>Tài khoản</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <nav>
          <div className='container  flex justify-between items-center mx-auto max-w-7xl'>
            <div className='flex items-center h-12 '>
              <div className='relative ' onMouseEnter={handleOpenMenu} onMouseLeave={handleCloseMenu}>
                <button
                  className={`flex items-center space-x-2 px-2 py-2 text-white hover:bg-secondary rounded transition-colors ${
                    isMenuOpen ? 'bg-primary' : 'bg-secondary'
                  }`}
                >
                  <MenuIcon size={18} />
                  <span>Danh mục sản phẩm</span>
                  <ChevronDown size={16} className={`transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {isMenuOpen && (
                  <div className='absolute bg-gray-100  left-0 top-full z-50 text-gray-800 shadow-2xl rounded-lg border flex w-[80vw]'>
                    <div className='w-1/3  bg-white'>
                      {categories.map((category) => (
                        <div key={category.id}>
                          <button
                            onMouseEnter={() => setHoveredCategory(category.id)}
                            className={`w-full flex items-center  justify-between px-3 py-4 hover:bg-gray-100 hover:text-secondary transition-colors text-left rounded ${
                              hoveredCategory === category.id
                                ? 'bg-gray-100 text-secondary'
                                : 'hover:bg-gray-100 hover:text-secondary'
                            }`}
                          >
                            <div className='flex items-center  space-x-3'>
                              <img src={category.image} alt={category.name} className='w-8 h-8 rounded object-cover' />

                              <span className='font-medium'>{category.name}</span>
                            </div>
                            <ChevronRight size={14} className='text-gray-400 hover:text-secondary' />
                          </button>
                        </div>
                      ))}
                    </div>

                    {hoveredCategory && (
                      <div className='w-full mx-10 mb-10 '>
                        {/* Subcategories */}
                        <div className=' '>
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
                        </div>
                        <div className='h-[0.2px] bg-gray-300 my-4'></div>
                        <div>
                          <div className='flex justify-between items-center'>
                            <h3 className='font-medium text-2xl mb-3 text-black'>Sản phẩm bán chạy </h3>
                            <div className='flex items-center gap-2 cursor-pointer text-primary hover:text-secondary'>
                              <span className='font-semibold '>Xem tất cả</span>
                              <ChevronsRight className='w-4 h-4 mr-1 ' strokeWidth={3} />
                            </div>
                          </div>
                          <div className='grid grid-cols-5 gap-4 mt-2'>
                            {getCurrentCategory()?.featuredProducts?.map((product) => (
                              // <a
                              //   key={product.id}
                              //   href='#'
                              //   className='flex items-center space-x-3 px-3 py-2 hover:bg-blue-50 rounded transition-colors'
                              // >
                              //   <img src={product.image} alt={product.name} className='w-12 h-12 rounded object-cover' />
                              //   <div>
                              //     <div className='font-medium'>{product.name}</div>
                              //     <div className='text-sm text-red-500 font-bold'>
                              //       {product.price.toLocaleString()}đ
                              //       {product.originalPrice && (
                              //         <span className='ml-2 text-gray-400 line-through'>
                              //           {product.originalPrice.toLocaleString()}đ
                              //         </span>
                              //       )}
                              //     </div>
                              //   </div>
                              // </a>
                              <ProductCard product={product} size='28' />
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className='flex items-center space-x-4 ml-4'>
                <a href='#' className='hover:text-secondary font-medium transition-colors'>
                  Về chúng tôi
                </a>
                <a href='#' className='hover:text-secondary font-medium transition-colors'>
                  Bài viết
                </a>
                <a href='#' className='hover:text-secondary font-medium transition-colors'>
                  Catalog
                </a>
                <a href='#' className='hover:text-secondary font-medium transition-colors'>
                  Liên hệ
                </a>
              </div>
            </div>
            <div className='flex items-center space-x-4'>
              <div className='flex items-center gap-2'>
                <Clock className='w-4 h-4 mr-1 text-primary' strokeWidth={3} />
                <span className='font-semibold'>Hỗ trợ 24/7</span>
              </div>
              <div className='flex items-center'>
                <HandCoins className='w-4 h-4 mr-1 text-primary' strokeWidth={3} />
                <span className='font-semibold'>Miễn phí vận chuyển</span>
              </div>
              <div className='flex items-center'>
                <Truck className='w-4 h-4 mr-1 text-primary' strokeWidth={3} />
                <span className='font-semibold'>Giao hàng nhanh 24h</span>
              </div>
              <div className='flex items-center'>
                <RefreshCcw className='w-4 h-4 mr-1 text-primary' strokeWidth={3} />
                <span className='font-semibold'>30 ngày đổi trả</span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
