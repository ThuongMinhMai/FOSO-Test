export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  category: string;
  inStock: boolean;
  brand:string;
  year: number;
  country:string
  createdAt: string;
  sold:number;
  featured:boolean
}
export interface Subcategory {
  id: string;
  name: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  image:string
  subcategories?: Subcategory[];
  featuredProducts: Product[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  avatar?: string;
}

export type FilterType = 'Liên quan' | 'Mới nhất' | 'Bán chạy' | 'Nổi bật'
export type SortType = 'Giá: Thấp → Cao' | 'Giá: Cao → Thấp'
