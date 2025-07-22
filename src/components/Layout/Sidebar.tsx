import { Filter } from 'lucide-react'
import { useState } from 'react'
import { categories, products } from '../../data/mockData'
import CategoryFilter from '../../features/product/filter/CategoryFilter'
import PriceFilter from '../../features/product/filter/PriceFilter'
import CheckboxGroup from '../../features/product/filter/CheckboxGroup'

function Sidebar() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    category: true,
    price: true,
    brand: true,
    year: true,
    country: true
  })

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  const brands = [...new Set(products.map((p) => p.brand))]
  const years = [...new Set(products.map((p) => p.year))].sort((a, b) => b - a)
  const countries = [...new Set(products.map((p) => p.country))]

  return (
    <aside className='w-80 bg-white border-r border-gray-200 h-screen sticky top-0 overflow-y-auto p-4'>
      <div className='flex items-center justify-between mb-6'>
        <div className='flex items-center'>
          <Filter className='mr-2 text-primary' size={20} />
          <h2 className='text-lg font-semibold text-gray-800'>Bộ lọc sản phẩm</h2>
        </div>
        <button className='text-sm text-primary hover:text-secondary transition-colors duration-200'>Đặt lại</button>
      </div>

      <CategoryFilter categories={categories} open={openSections.category} toggle={() => toggleSection('category')} />

      <PriceFilter open={openSections.price} toggle={() => toggleSection('price')} />

      <CheckboxGroup
        title='Thương hiệu'
        items={brands}
        open={openSections.brand}
        toggle={() => toggleSection('brand')}
      />

      <CheckboxGroup title='Năm sản xuất' items={years} open={openSections.year} toggle={() => toggleSection('year')} />

      <CheckboxGroup
        title='Xuất xứ'
        items={countries}
        open={openSections.country}
        toggle={() => toggleSection('country')}
      />
    </aside>
  )
}

export default Sidebar
