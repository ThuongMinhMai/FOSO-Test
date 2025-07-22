import PromoBanner from './components/ui/banner/PromoBanner'
import ProductGrid from './features/product/ProductGrid'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import Sidebar from './components/layout/Sidebar'
import ShippingBenefits from './features/shipping/ShippingBenefits'
import Header from './components/layout/header/Header'

function App() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />
      <PromoBanner />
      <div className='max-w-7xl mx-auto flex mt-10'>
        <Sidebar />
        <main className='flex justify-center items-center'>
          <ProductGrid />
        </main>
      </div>
      <ShippingBenefits />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
export default App
