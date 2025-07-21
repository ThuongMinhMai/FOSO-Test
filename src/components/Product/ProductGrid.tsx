// import React from 'react'
// import ProductCard from './ProductCard'
// import LoadingSpinner from './LoadingSpinner'
// import ProductSkeleton from './ProductSkeleton'
// import { useProducts } from '../../hooks/useProducts'
// import { useCart } from '../../hooks/useCart'
// import { useInfiniteScroll } from '../../hooks/useInfiniteScroll'

// function ProductGrid() {
//   const { addToCart } = useCart()
//   const { products, isLoading, hasMore, loadProducts } = useProducts()
//   console.log(products)
//   React.useEffect(() => {
//     if (products.length === 0) {
//       loadProducts()
//     }
//   }, [products.length, loadProducts])
//   useInfiniteScroll({
//     hasMore,
//     isLoading,
//     onLoadMore: loadProducts,
//     threshold: 200
//   })

//   return (
//     <section className='max-w-7xl mx-auto px-4 py-8'>
//       <div className='flex items-center justify-between mb-6'>
//         <h2 className='text-2xl font-bold text-gray-800'>Sản phẩm nổi bật</h2>
//         <div className='flex items-center space-x-4'>
//           <span className='text-sm text-gray-500'>{products.length} sản phẩm</span>
//           {hasMore && <span className='text-sm text-blue-600'>Đang tải thêm...</span>}
//         </div>
//       </div>

//       <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6'>
//         {products.map((product) => (
//           <ProductCard size='56' showButtonBuy={true} key={product.id} product={product} onAddToCart={addToCart} />
//         ))}

//         {isLoading && Array.from({ length: 10 }).map((_, index) => <ProductSkeleton key={`skeleton-${index}`} />)}
//       </div>

//       {isLoading && products.length > 0 && <LoadingSpinner />}

//       {!hasMore && products.length > 0 && (
//         <div className='text-center py-8'>
//           <div className='inline-flex items-center px-6 py-3 bg-gray-100 rounded-lg'>
//             <span className='text-gray-600 font-medium'>🎉 Bạn đã xem hết tất cả sản phẩm</span>
//           </div>
//         </div>
//       )}

//       {!isLoading && products.length === 0 && (
//         <div className='text-center py-12'>
//           <div className='text-gray-400 mb-4'>
//             <svg className='w-16 h-16 mx-auto' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 strokeWidth={1}
//                 d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2M4 13h2m13-8V4a1 1 0 00-1-1H7a1 1 0 00-1 1v1m8 0V4.5'
//               />
//             </svg>
//           </div>
//           <h3 className='text-lg font-medium text-gray-600 mb-2'>Không có sản phẩm nào</h3>
//           <p className='text-gray-500'>Vui lòng thử lại sau hoặc liên hệ hỗ trợ</p>
//         </div>
//       )}
//     </section>
//   )
// }

// export default ProductGrid
import InfiniteScroll from 'react-infinite-scroll-component'
import ProductCard from './ProductCard'
import LoadingSpinner from './LoadingSpinner'
import { useProducts } from '../../hooks/useProducts'
import ProductHeader from './ProductHeader.tsx'

function ProductGrid() {
  const { products, isLoading, hasMore, loadProducts } = useProducts()

  return (
    <div className='max-w-7xl mx-auto px-4 py-8 flex flex-col items-center justify-center'>
      <ProductHeader />
      <InfiniteScroll
        dataLength={products.length}
        next={loadProducts}
        hasMore={hasMore}
        loader={<LoadingSpinner />}
        endMessage={
          <div className='text-center py-8'>
            <div className='inline-flex items-center px-6 py-3 bg-gray-100 rounded-lg'>
              <span className='text-gray-600 font-medium'>🎉 Bạn đã xem hết tất cả sản phẩm</span>
            </div>
          </div>
        }
      >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} size='56' showButtonBuy={true} />
          ))}
        </div>

        {!isLoading && products.length === 0 && (
          <div className='text-center py-12'>
            <div className='text-gray-400 mb-4'>
              <svg className='w-16 h-16 mx-auto' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1}
                  d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2M4 13h2m13-8V4a1 1 0 00-1-1H7a1 1 0 00-1 1v1m8 0V4.5'
                />
              </svg>
            </div>
            <h3 className='text-lg font-medium text-gray-600 mb-2'>Không có sản phẩm nào</h3>
            <p className='text-gray-500'>Vui lòng thử lại sau hoặc liên hệ hỗ trợ</p>
          </div>
        )}
      </InfiniteScroll>
    </div>
  )
}
export default ProductGrid
