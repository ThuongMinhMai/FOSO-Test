import { Camera, Search, CircleUserRound } from 'lucide-react'
import logo from '../../../assets/logo.png'
import CartDropDown from '../../../features/cart/CartDropDown'

const HeaderMain = () => {
  return (
    <div className='left-0 w-full z-50 bg-white'>
      <div className='max-w-7xl mx-auto px-4 py-10'>
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
              <div className='absolute right-2 top-1/2 transform -translate-y-1/2 flex'>
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

            <CartDropDown />
            <button className='flex items-center space-x-1 hover:text-secondary transition-colors'>
              <CircleUserRound size={28} className='text-primary' strokeWidth={1.5} />
              <span className='hidden md:inline font-medium'>Tài khoản</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderMain
