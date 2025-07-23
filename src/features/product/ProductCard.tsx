import { ShoppingCart } from 'lucide-react'
import { Product } from '../../types'
import { formatPrice } from '../../lib/utils'
import { useCart } from '../../contexts/CartContext'

interface ProductCardProps {
  product: Product
  size: string
  onAddToCart?: (product: Product) => void
  showButtonBuy?: boolean
}

function ProductCard({ product, size, onAddToCart, showButtonBuy = false }: ProductCardProps) {
  
  const { addToCart } = useCart()
  return (
    <div className='group  bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative flex flex-col'>
      <div className='p-2'>
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-${size} object-cover group-hover:scale-105 transition-transform duration-300`}
        />
      </div>

      <div
        className='absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2'
        onClick={() => addToCart(product)}
      >
        <button className='bg-white text-gray-600 hover:text-red-500 p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200'>
          <ShoppingCart className='w-4 h-4' />
        </button>
      </div>

      <div className='flex flex-col justify-between flex-1 p-4'>
        <div>
          <h3 className='text-lg font-medium text-gray-800 mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200'>
            {product.name}
          </h3>
          <div className='flex items-center justify-between mb-2'>
            <div className='flex flex-col items-start'>
              <span className='text-lg font-bold text-red-600'>{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <div className='flex gap-1 justify-center items-center'>
                  <span className='text-md text-gray-400 line-through'>{formatPrice(product.originalPrice)}</span>
                  <span className='text-xs font-medium text-red-600'>{product.discount}%</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {(showButtonBuy || !showButtonBuy) && (
          <div
            className={`mt-3 transition-opacity duration-300 ${
              showButtonBuy ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 hidden'
            }`}
          >
            <button
              onClick={() => onAddToCart?.(product)}
              className='w-full bg-blue-50 hover:text-primary text-primary py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center'
            >
              Mua ngay
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCard
