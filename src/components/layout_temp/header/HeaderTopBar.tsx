import { BadgePercent, Phone, Smartphone } from 'lucide-react'

const HeaderTopBar = () => {
  return (
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
  )
}

export default HeaderTopBar
