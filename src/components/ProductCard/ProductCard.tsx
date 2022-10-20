import React, { useState } from 'react'
import { IProduct } from '../../models/models'

interface ProductCardProps {
  product: IProduct,
}
export default function ProductCard({ product }: ProductCardProps) {
  const [number, setNumber] = useState(0)

  const minusHandler = () => number !== 0 && setNumber(number - 1)
  const plusHandler = () => number !== product.images.length - 1 && setNumber(number + 1)


  return (
    <div className="card max-w-[200px] h-70 my-2">
      <img className="object-contain h-40 card-img-top" src={product.images[number]} alt="Card image cap" />
      <div className="my-1 flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={minusHandler}>Prev</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={plusHandler}>Next</button>
      </div>
      <div className="card-body">
        <h5 className="card-title flex justify-center">{product.title}</h5>
        <h5 className="card-title flex justify-center">${product.price}</h5>
        <p className="card-text">{product.description}</p>
      </div>
    </div >
  )
}
