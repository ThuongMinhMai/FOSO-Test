
function ProductSkeleton() {
  return (
    <div className='bg-white border border-gray-200 rounded-lg overflow-hidden animate-pulse'>
      <div className='w-full h-48 bg-gray-200'></div>

      <div className='p-4'>
        <div className='space-y-2 mb-3'>
          <div className='h-4 bg-gray-200 rounded w-full'></div>
          <div className='h-4 bg-gray-200 rounded w-3/4'></div>
        </div>

        <div className='flex items-center justify-between mb-2'>
          <div className='h-6 bg-gray-200 rounded w-24'></div>
          <div className='h-4 bg-gray-200 rounded w-16'></div>
        </div>

        <div className='flex items-center justify-between'>
          <div className='h-3 bg-gray-200 rounded w-20'></div>
          <div className='h-3 bg-gray-200 rounded w-16'></div>
        </div>
      </div>
    </div>
  )
}

export default ProductSkeleton
