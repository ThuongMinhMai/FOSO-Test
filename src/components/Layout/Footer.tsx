
import { ChevronDown, MapPinned, MoveRight } from 'lucide-react'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className=' bg-white border-t border-gray-200'>
      <div className='bg-blue-50 border-b border-blue-100 '>
        <div className='container max-w-7xl mx-auto px-4 py-3'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
              <MapPinned className='text-primary' size={32} />
              <span className='text-xl font-medium text-black'>Xem hệ thống 88 cửa hàng trên toàn quốc</span>
            </div>
            <button className='flex bg-white px-3 py-2 rounded-full items-center justify-center space-x-1 text-primary text-sm font-medium hover:text-secondary transition-colors'>
              <span>Xem ngay</span>
               <MoveRight className='text-primary' size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-4 py-8'>
        <div className='  max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
          <div className='lg:col-span-2 '>
            <h3 className='text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide'>
              VIET HUNG AUTO PRODUCTION TRADING JOINT STOCK COMPANY
            </h3>
            <div className='space-y-2 text-sm text-gray-600'>
              <p>Tax code: 0305094228</p>
              <p>Address: 19 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Viet Nam</p>
              <p>Phone number: 0283 760 7607</p>
              <p>Opening hour: 09:00 - 22:00 from Mon - Fri</p>
            </div>

            <div className='mt-6'>
              <div className='inline-flex items-center space-x-2 bg-primary text-white px-3 py-2 rounded-lg text-xs'>
                <div className='w-6 h-6 bg-white rounded-full flex items-center justify-center'>
                  <svg className='w-4 h-4 text-primary' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div>
                  <div className='font-semibold'>ĐÃ THÔNG BÁO</div>
                  <div className='text-xs opacity-90'>BỘ CÔNG THƯƠNG</div>
                </div>
              </div>
            </div>
          </div>

          <div className=''>
            <h3 className='text-sm font-semibold text-gray-900 mb-4'>Sitemap</h3>
            <ul className='space-y-2 text-sm text-gray-600'>
              <li>
                <a href='#' className='hover:text-secondary transition-colors'>
                  About
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-secondary transition-colors'>
                  Article
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-secondary transition-colors'>
                  Cart
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-secondary transition-colors'>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-sm font-semibold text-gray-900 mb-4'>Legal</h3>
            <ul className='space-y-2 text-sm text-gray-600'>
              <li>
                <a href='#' className='hover:text-primary transition-colors'>
                  — Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-primary transition-colors'>
                  Cookie policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-primary transition-colors'>
                  Delivery policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-primary transition-colors'>
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-sm font-semibold text-gray-900 mb-4'>Download App</h3>
            <div className='space-y-3'>
              {/* Google Play Store */}
              <a href='#' className='block'>
                <div className='bg-black text-white rounded-lg px-4 py-2 flex items-center space-x-3 hover:bg-gray-800 transition-colors'>
                  <svg className='w-6 h-6' viewBox='0 0 24 24' fill='currentColor'>
                    <path d='M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z' />
                  </svg>
                  <div className='text-left'>
                    <div className='text-xs opacity-75'>Get it on</div>
                    <div className='text-sm font-semibold'>Google Play Store</div>
                  </div>
                </div>
              </a>

              <a href='#' className='block'>
                <div className='bg-primary text-white rounded-lg px-4 py-2 flex items-center space-x-3 hover:bg-secondary transition-colors'>
                  <svg className='w-6 h-6' viewBox='0 0 24 24' fill='currentColor'>
                    <path d='M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z' />
                  </svg>
                  <div className='text-left'>
                    <div className='text-xs opacity-75'>Download from</div>
                    <div className='text-sm font-semibold'>Apple App Store</div>
                  </div>
                </div>
              </a>
            </div>

            <div className='mt-6'>
              <button className='flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800 transition-colors'>
                <div className='w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold'>
                  VI
                </div>
                <ChevronDown className='w-4 h-4' />
              </button>
            </div>
          </div>
        </div>
      </div>

      <button className='fixed bottom-6 right-6 w-10 h-10 bg-white border border-gray-300 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow'>
        <svg className='w-5 h-5 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 15l7-7 7 7' />
        </svg>
      </button>
    </footer>
  )
}

export default Footer
