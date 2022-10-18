import React, { useEffect, useState } from 'react'
import { IProduct } from '../../models/models'

interface ProductCardProps {
  product: IProduct,
}
export default function ProductCard({ product }: ProductCardProps) {
  const [number, setNumber] = useState(1)

  const minusHandler = () => number !== 0 && setNumber(number - 1)
  const plusHandler = () => number !== product.images.length - 1 && setNumber(number + 1)


  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top max-w-sm" src={product.images[number]} alt="Card image cap" />
      <div className="my-1 pl-20">
        <button onClick={minusHandler}>Prev</button>
        <button onClick={plusHandler} className="">Next</button>
        {/* <button className=""><img src="https://emoji-uc.akamaized.net/orig/1e/e97b5050a25455d87c59005fc706e2.png"/></button> */}
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the  content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div >
  )
}
