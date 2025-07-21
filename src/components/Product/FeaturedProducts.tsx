import ProductCard from './ProductCard'
import { products } from '../../data/mockData'
import { useCart } from '../../contexts/CartContext'
function FeaturedProducts() {
  const { addToCart } = useCart()

  return (
    <section className='max-w-7xl mx-auto px-4 py-8 border-b border-gray-200'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-2xl font-bold text-gray-800'>Sản phẩm khuyến mãi</h2>
        <button className='text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200'>
          Xem tất cả →
        </button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6'>
        {products.map((product) => (
          <ProductCard size='56' showButtonBuy={true} key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedProducts
