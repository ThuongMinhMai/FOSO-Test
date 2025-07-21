import PromoBanner from './components/Banner/PromoBanner'
import Header from './components/Header/Header'
import FeaturedProducts from './components/Product/FeaturedProducts'
import ProductGrid from './components/Product/ProductGrid'
import Footer from './components/Layout/Footer'
import ScrollToTop from './components/Layout/ScrollToTop'
import Sidebar from './components/Layout/Sidebar'
import ShippingBenefits from './components/Product/ShippingBenefits'

function App() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />
      <PromoBanner />
      <div className='max-w-7xl mx-auto flex mt-10'>
        <Sidebar />
        <main className= 'flex justify-center items-center'>

          <ProductGrid />
        </main>
      </div>
      <ShippingBenefits/>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
export default App
