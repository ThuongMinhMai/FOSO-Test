
function LoadingSpinner() {
  return (
    <div className='flex justify-center items-center py-8'>
      <div className='relative'>
        <div className='w-12 h-12 border-4 border-blue-200 border-t-primary rounded-full animate-spin'></div>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-6 h-6 bg-priborder-t-primary rounded-full animate-pulse'></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSpinner
