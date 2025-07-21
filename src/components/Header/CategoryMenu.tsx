// import { ChevronRight, Grid3X3 } from 'lucide-react'
// import React, { useState } from 'react'
// import { categories, hotProducts } from '../../data/mockData'

// function CategoryMenu() {
//   const [isOpen, setIsOpen] = useState(false)

//   const formatPrice = (price: number) => {
//     return new Intl.NumberFormat('vi-VN').format(price) + ' ₫'
//   }

//   return (
//     <div className='relative' onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
//       <button className='flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200'>
//         <Grid3X3 className='w-5 h-5 mr-2' />
//         Danh mục sản phẩm
//         <ChevronRight className='w-4 h-4 ml-2' />
//       </button>

//       {isOpen && (
//         <div className='absolute top-full left-0 z-50 w-screen max-w-4xl bg-white shadow-2xl border border-gray-200 rounded-lg mt-2 transition-all duration-300 transform'>
//           <div className='flex'>
//             {/* Categories Sidebar */}
//             <div className='w-80 bg-gray-50 border-r border-gray-200 rounded-l-lg'>
//               <div className='p-4'>
//                 {categories.map((category) => (
//                   <div
//                     key={category.id}
//                     className='group flex items-center justify-between p-3 hover:bg-blue-50 rounded-lg cursor-pointer transition-colors duration-200'
//                   >
//                     <div className='flex items-center'>
//                       {/* <span className='text-2xl mr-3'>{category.icon}</span> */}
//                       <span className='text-gray-700 group-hover:text-blue-600 font-medium'>{category.name}</span>
//                     </div>
//                     <ChevronRight className='w-4 h-4 text-gray-400 group-hover:text-blue-600' />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Products Content */}
//             <div className='flex-1 p-6'>
//               {/* Hot Products Grid */}
//               <div className='grid grid-cols-3 gap-4 mb-6'>
//                 {hotProducts.map((product) => (
//                   <div key={product.id} className='text-center'>
//                     <div className='bg-gray-100 rounded-lg p-4 mb-2'>
//                       <img src={product.image} alt={product.name} className='w-16 h-16 mx-auto object-cover rounded' />
//                     </div>
//                     <p className='text-sm text-gray-600 font-medium'>Bộ lọc gió</p>
//                   </div>
//                 ))}
//               </div>

//               {/* Best Selling Products */}
//               <div>
//                 <div className='flex items-center justify-between mb-4'>
//                   <h3 className='text-lg font-semibold text-gray-800'>Sản Phẩm Bán Chạy</h3>
//                   <button className='text-blue-600 hover:text-blue-700 font-medium'>Xem tất cả →</button>
//                 </div>

//                 <div className='grid grid-cols-5 gap-4'>
//                   {hotProducts.slice(0, 5).map((product) => (
//                     <div key={product.id} className='group cursor-pointer'>
//                       <div className='bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow duration-200'>
//                         <img src={product.image} alt={product.name} className='w-full h-20 object-cover rounded mb-2' />
//                         <h4 className='text-xs text-gray-800 font-medium mb-1 line-clamp-2'>{product.name}</h4>
//                         <div className='flex items-center justify-between'>
//                           <span className='text-red-600 font-bold text-sm'>{formatPrice(product.price)}</span>
//                           <span className='text-xs text-gray-500'>-15%</span>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default CategoryMenu
