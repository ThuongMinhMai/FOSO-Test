import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Product } from '../types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const getRandomProducts = (pool: Product[]): Product[] => {
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  const count = Math.floor(Math.random() * 3) + 3
  return shuffled.slice(0, count)
}

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('vi-VN').format(price) + ' ₫'
}
