import bannerImage from '../../../assets/banner.png'
import { products } from '../../../data/mockData'
import ProductCard from '../../../features/product/ProductCard'
import Slider from 'react-slick'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function ArrowLeft(props: any) {
  const { onClick } = props
  return (
    <button
      className='absolute z-10 left-[-20px] top-1/2 -translate-y-1/2 bg-blue-50 shadow p-2 rounded-full'
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
      className='absolute z-10 right-[-20px] top-1/2 -translate-y-1/2 bg-blue-50 shadow p-2 rounded-full'
      onClick={onClick}
    >
      <ChevronRight size={20} className='text-primary hover:text-foreground' />
    </button>
  )
}

function PromoBanner() {
  const topProducts = products.slice(0, 10)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
    <div className='max-w-7xl mx-auto bg-primary relative overflow-hidden rounded-lg'>
      <div className=''>
        <img src={bannerImage} alt='Banner' className='w-full' />
      </div>

      <div className='max-w-7xl mx-auto mt-10 px-6 relative mb-10'>
        <Slider {...settings}>
          {topProducts.map((product) => (
            <div key={product.id} className='px-2'>
              <ProductCard product={product} size='56' showButtonBuy={true} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PromoBanner
