import { useRef } from 'react'
import PromoBanner from './components/ui/banner/PromoBanner'
import ProductGrid from './features/product/ProductGrid'
import ShippingBenefits from './features/shipping/ShippingBenefits'
import ScrollToTop from './components/common/ScrollToTop'
import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/header/Header'
import Footer from './components/layout/Footer'

function App() {
  const productGridRef = useRef<HTMLDivElement>(null)
  return (
    <div className='min-h-screen bg-gray-50'>
      <Header scrollToProductGrid={() => productGridRef.current?.scrollIntoView({ behavior: 'smooth' })} />
      <PromoBanner />
      <div className='max-w-7xl mx-auto flex mt-10'>
        <Sidebar />
        <main className='flex justify-center items-start'>
          <ProductGrid ref={productGridRef} />
        </main>
      </div>
      <ShippingBenefits />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
export default App
