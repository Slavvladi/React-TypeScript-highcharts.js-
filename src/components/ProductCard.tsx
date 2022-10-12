import React from 'react'
import { IProduct } from '../models/models'

interface ProductCardProps {
    product: IProduct
}
export default function ProductCard({product}: ProductCardProps) {
  return (
    <>
    <div>{product.brand}</div>
    <div>{product.images}</div>
    </>
  )
}
