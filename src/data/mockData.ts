import { Category, Product } from '../types';
const getRandomProducts = (pool: Product[]): Product[] => {
  const shuffled = [...pool].sort(() => Math.random() - 0.5);      
  const count = Math.floor(Math.random() * 3) + 3;                
  return shuffled.slice(0, count);
};


export const products: Product[] = [
  {
    id: '1',
    name: 'Lọc gió động cơ Air Filter - Chevrolet Captiva',
    price: 299000,
    originalPrice: 350000,
    discount: 15,
       image: 'https://product.hstatic.net/1000288684/product/loi_loc_giay_busch_6a379665f5ae41749a8be04ed833f49c_large.png',

    category: 'Bộ Lọc Không Khí',
    inStock: true,
    brand: 'Chevrolet',
    year: 2022,
    country: 'USA'
  },
  {
    id: '2', 
    name: 'Lọc dầu động cơ Oil Filter - Toyota Camry',
    price: 199000,
    originalPrice: 249000,
    discount: 20,
       image: 'https://product.hstatic.net/1000288684/product/loi_loc_giay_busch_6a379665f5ae41749a8be04ed833f49c_large.png',

    category: 'Bộ Lọc Dầu',
    inStock: true,
    brand: 'Toyota',
    year: 2023,
    country: 'Japan'
  },
  {
    id: '3',
    name: 'Lọc nhiên liệu Fuel Filter - Honda Civic', 
    price: 259000,
    originalPrice: 299000,
    discount: 13,
        image: 'https://product.hstatic.net/1000288684/product/loi_loc_giay_busch_6a379665f5ae41749a8be04ed833f49c_large.png',

    category: 'Bộ Lọc Nhiên Liệu',
    inStock: true,
    brand: 'Honda',
    year: 2021,
    country: 'Japan'
  },
  {
    id: '4',
    name: 'Lọc cabin Cabin Filter - Mazda CX-5',
    price: 189000,
    originalPrice: 220000, 
    discount: 14,
       image: 'https://product.hstatic.net/1000288684/product/loi_loc_giay_busch_6a379665f5ae41749a8be04ed833f49c_large.png',

    category: 'Bộ Lọc Trong Cabin',
    inStock: true,
    brand: 'Mazda',
    year: 2022,
    country: 'Japan'
  },
  {
    id: '5',
    name: 'Lọc gió thể thao K&N Air Filter - BMW E90',
    price: 899000,
    originalPrice: 1099000,
    discount: 18,
       image: 'https://product.hstatic.net/1000288684/product/loi_loc_giay_busch_6a379665f5ae41749a8be04ed833f49c_large.png',

    category: 'Bộ Lọc Không Khí',
    inStock: true,
    brand: 'BMW',
    year: 2020,
    country: 'Germany'
  },
  {
    id: '6',
    name: 'Lọc gió động cơ - Hyundai Accent',
    price: 250000,
    originalPrice: 300000,
    discount: 17,
      image: 'https://product.hstatic.net/1000288684/product/loi_loc_giay_busch_6a379665f5ae41749a8be04ed833f49c_large.png',

    category: 'Bộ Lọc Không Khí',
    inStock: true,
    brand: 'Hyundai',
    year: 2021,
    country: 'Korea'
  },
  {
    id: '7',
    name: 'Lọc dầu động cơ - Ford Ranger',
    price: 220000,
    originalPrice: 270000,
    discount: 19,
      image: 'https://product.hstatic.net/1000288684/product/loi_loc_giay_busch_6a379665f5ae41749a8be04ed833f49c_large.png',

    category: 'Bộ Lọc Dầu',
    inStock: true,
    brand: 'Ford',
    year: 2023,
    country: 'USA'
  },
  {
    id: '8',
    name: 'Lọc nhiên liệu - Mitsubishi Xpander',
    price: 280000,
    originalPrice: 320000,
    discount: 13,
       image: 'https://product.hstatic.net/1000288684/product/loi_loc_giay_busch_6a379665f5ae41749a8be04ed833f49c_large.png',

    category: 'Bộ Lọc Nhiên Liệu',
    inStock: true,
    brand: 'Mitsubishi',
    year: 2022,
    country: 'Japan'
  },
  {
    id: '9',
    name: 'Lọc cabin - Toyota Fortuner',
    price: 210000,
    originalPrice: 250000,
    discount: 16,
       image: 'https://product.hstatic.net/1000288684/product/loi_loc_giay_busch_6a379665f5ae41749a8be04ed833f49c_large.png',

    category: 'Bộ Lọc Trong Cabin',
    inStock: true,
    brand: 'Toyota',
    year: 2021,
    country: 'Japan'
  },
  {
    id: '10',
    name: 'Lọc gió thể thao - Subaru Forester',
    price: 950000,
    originalPrice: 1150000,
    discount: 17,
    image: 'https://product.hstatic.net/1000288684/product/loi_loc_giay_busch_6a379665f5ae41749a8be04ed833f49c_large.png',
  
    category: 'Bộ Lọc Không Khí',
    inStock: true,
    brand: 'Subaru',
    year: 2022,
    country: 'Japan'
  },
  {
    id: '11',
    name: 'Lọc gió động cơ - Mercedes C200',
    price: 1200000,
    originalPrice: 1400000,
    discount: 14,
       image: 'https://product.hstatic.net/1000288684/product/loi_loc_giay_busch_6a379665f5ae41749a8be04ed833f49c_large.png',

    category: 'Bộ Lọc Không Khí',
    inStock: true,
    brand: 'Mercedes',
    year: 2023,
    country: 'Germany'
  },
  {
    id: '12',
    name: 'Lọc dầu động cơ - Kia Seltos',
    price: 230000,
    originalPrice: 280000,
    discount: 18,
        image: 'https://product.hstatic.net/1000288684/product/loi_loc_giay_busch_6a379665f5ae41749a8be04ed833f49c_large.png',

    category: 'Bộ Lọc Dầu',
    inStock: true,
    brand: 'Kia',
    year: 2022,
    country: 'Korea'
  },
  {
    id: '13',
    name: 'Lọc nhiên liệu - Volkswagen Tiguan',
    price: 320000,
    originalPrice: 380000,
    discount: 16,
       image: 'https://product.hstatic.net/1000288684/product/loi_loc_giay_busch_6a379665f5ae41749a8be04ed833f49c_large.png',

    category: 'Bộ Lọc Nhiên Liệu',
    inStock: true,
    brand: 'Volkswagen',
    year: 2021,
    country: 'Germany'
  },
  {
    id: '14',
    name: 'Lọc cabin - Nissan X-Trail',
    price: 195000,
    originalPrice: 230000,
    discount: 15,
      image: 'https://product.hstatic.net/1000288684/product/loi_loc_giay_busch_6a379665f5ae41749a8be04ed833f49c_large.png',

    category: 'Bộ Lọc Trong Cabin',
    inStock: true,
    brand: 'Nissan',
    year: 2022,
    country: 'Japan'
  },
  {
    id: '15',
    name: 'Lọc gió thể thao - Audi A4',
    price: 1100000,
    originalPrice: 1300000,
    discount: 15,
      image: 'https://product.hstatic.net/1000288684/product/loi_loc_giay_busch_6a379665f5ae41749a8be04ed833f49c_large.png',

    category: 'Bộ Lọc Không Khí',
    inStock: true,
    brand: 'Audi',
    year: 2023,
    country: 'Germany'
  },
  {
    id: '16',
    name: 'Lọc gió động cơ - Lexus RX350',
    price: 850000,
    originalPrice: 950000,
    discount: 11,
      image: 'https://product.hstatic.net/1000288684/product/loi_loc_giay_busch_6a379665f5ae41749a8be04ed833f49c_large.png',

    category: 'Bộ Lọc Không Khí',
    inStock: true,
    brand: 'Lexus',
    year: 2021,
    country: 'Japan'
  },
  {
    id: '17',
    name: 'Lọc dầu động cơ - Peugeot 3008',
    price: 270000,
    originalPrice: 320000,
    discount: 16,
      image: 'https://product.hstatic.net/1000288684/product/loi_loc_giay_busch_6a379665f5ae41749a8be04ed833f49c_large.png',

    category: 'Bộ Lọc Dầu',
    inStock: true,
    brand: 'Peugeot',
    year: 2022,
    country: 'France'
  },
  {
    id: '18',
    name: 'Lọc nhiên liệu - Volvo XC60',
    price: 350000,
    originalPrice: 400000,
    discount: 13,
      image: 'https://product.hstatic.net/1000288684/product/loi_loc_giay_busch_6a379665f5ae41749a8be04ed833f49c_large.png',

    category: 'Bộ Lọc Nhiên Liệu',
    inStock: true,
    brand: 'Volvo',
    year: 2023,
    country: 'Sweden'
  },
  {
    id: '19',
    name: 'Lọc cabin - Land Rover Discovery',
    price: 310000,
    originalPrice: 370000,
    discount: 16,
      image: 'https://product.hstatic.net/1000288684/product/loi_loc_giay_busch_6a379665f5ae41749a8be04ed833f49c_large.png',

    category: 'Bộ Lọc Trong Cabin',
    inStock: true,
    brand: 'Land Rover',
    year: 2021,
    country: 'UK'
  },
  {
    id: '20',
    name: 'Lọc gió thể thao - Porsche Cayenne',
    price: 1500000,
    originalPrice: 1800000,
    discount: 17,
      image: 'https://product.hstatic.net/1000288684/product/loi_loc_giay_busch_6a379665f5ae41749a8be04ed833f49c_large.png',

    category: 'Bộ Lọc Không Khí',
    inStock: true,
    brand: 'Porsche',
    year: 2022,
    country: 'Germany'
  }
];
export const categories: Category[] = [
  {
    id: '1',
    name: 'Bộ Lọc Dầu',
    image:"https://png.pngtree.com/png-clipart/20240223/original/pngtree-oil-filter-cartridge-filter-photo-png-image_14392597.png",
    subcategories: [
      { id: '1-1', name: 'Lọc dầu động cơ', image: 'https://www.electrolux.vn/globalassets/appliances/accessories/vn-effcln4-1500x1500.png' },
      { id: '1-2', name: 'Lọc dầu thủy lực', image: 'https://www.electrolux.vn/globalassets/appliances/accessories/vn-effcln4-1500x1500.png' },
      { id: '1-3', name: 'Lọc dầu hộp số', image: 'https://www.electrolux.vn/globalassets/appliances/accessories/vn-effcln4-1500x1500.png' },
    ],
    featuredProducts: getRandomProducts(products),
  },
  {
    id: '2',
    name: 'Bộ Lọc Không Khí',
    image:"https://png.pngtree.com/png-clipart/20240223/original/pngtree-oil-filter-cartridge-filter-photo-png-image_14392597.png",

    subcategories: [
      { id: '2-1', name: 'Lọc không khí động cơ', image: 'https://www.electrolux.vn/globalassets/appliances/accessories/vn-effcln4-1500x1500.png' },
      { id: '2-2', name: 'Lọc cabin', image: 'https://www.electrolux.vn/globalassets/appliances/accessories/vn-effcln4-1500x1500.png' },
      { id: '2-3', name: 'Lọc turbo', image: 'https://www.electrolux.vn/globalassets/appliances/accessories/vn-effcln4-1500x1500.png' },
      { id: '2-4', name: 'Lọc không khí', image: 'https://www.electrolux.vn/globalassets/appliances/accessories/vn-effcln4-1500x1500.png' },
    ],
    featuredProducts: getRandomProducts(products),
  },
  {
    id: '3',
    name: 'Bộ Lọc Nhiên Liệu',
    image:"https://png.pngtree.com/png-clipart/20240223/original/pngtree-oil-filter-cartridge-filter-photo-png-image_14392597.png",

    subcategories: [
      { id: '3-1', name: 'Lọc xăng', image: 'https://www.electrolux.vn/globalassets/appliances/accessories/vn-effcln4-1500x1500.png' },
      { id: '3-2', name: 'Lọc dầu diesel', image: 'https://www.electrolux.vn/globalassets/appliances/accessories/vn-effcln4-1500x1500.png' },
      { id: '3-3', name: 'Bộ lọc cao áp', image: 'https://www.electrolux.vn/globalassets/appliances/accessories/vn-effcln4-1500x1500.png' },
    ],
    featuredProducts: getRandomProducts(products),
  },
  {
    id: '4',
    name: 'Bộ Lọc Trong Cabin',
    image:"https://png.pngtree.com/png-clipart/20240223/original/pngtree-oil-filter-cartridge-filter-photo-png-image_14392597.png",

    subcategories: [
      { id: '4-1', name: 'Lọc điều hòa', image: 'https://www.electrolux.vn/globalassets/appliances/accessories/vn-effcln4-1500x1500.png' },
      { id: '4-2', name: 'Lọc không khí cabin', image: 'https://www.electrolux.vn/globalassets/appliances/accessories/vn-effcln4-1500x1500.png' },
      { id: '4-3', name: 'Lọc than hoạt tính', image: 'https://www.electrolux.vn/globalassets/appliances/accessories/vn-effcln4-1500x1500.png' },
    ],
    featuredProducts: getRandomProducts(products),
  },
  {
    id: '5',
    name: 'Bộ Lọc Không Khí',
    image:"https://png.pngtree.com/png-clipart/20240223/original/pngtree-oil-filter-cartridge-filter-photo-png-image_14392597.png",

    subcategories: [
      { id: '5-1', name: 'Lọc sport', image: 'https://www.electrolux.vn/globalassets/appliances/accessories/vn-effcln4-1500x1500.png' },
      { id: '5-2', name: 'Lọc OEM', image: 'https://www.electrolux.vn/globalassets/appliances/accessories/vn-effcln4-1500x1500.png' },
      { id: '5-3', name: 'Lọc cao cấp', image: 'https://www.electrolux.vn/globalassets/appliances/accessories/vn-effcln4-1500x1500.png' },
    ],
    featuredProducts: getRandomProducts(products),
  },
  {
    id: '6',
    name: 'Bộ Lọc Nước Làm Mát',
    image:"https://png.pngtree.com/png-clipart/20240223/original/pngtree-oil-filter-cartridge-filter-photo-png-image_14392597.png",

    subcategories: [
      { id: '6-1', name: 'Lọc nước radiator', image: 'https://www.electrolux.vn/globalassets/appliances/accessories/vn-effcln4-1500x1500.png' },
      { id: '6-2', name: 'Lọc hệ thống làm mát', image: 'https://www.electrolux.vn/globalassets/appliances/accessories/vn-effcln4-1500x1500.png' },
    ],
    featuredProducts: getRandomProducts(products),
  },
];


