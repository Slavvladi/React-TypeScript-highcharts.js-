import React, { useEffect } from 'react'
import { fetchProducts } from '../store/actions/productActions'
import { useAppDispatch, useAppSelector } from '../hook/redux'
import ProductCard from '../components/ProductCard'

export default function MainPage() {
  const dispatch = useAppDispatch()
  const {error, loading, products} = useAppSelector(state => state.product)
  console.log(products, 'products');
  

  useEffect(()=> {
    dispatch(fetchProducts())
  }, [])
  return (
    <div className='container mx-auto max-w[760px] pt-5'>
      {products.map(el => <ProductCard key={el.id} product={el}/>)}

    </div>
  )
}
