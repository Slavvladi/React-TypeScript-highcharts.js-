import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../store/actions/productActions'
import { useAppDispatch, useAppSelector } from '../hook/redux'
import ProductCard from '../components/ProductCard/ProductCard'
import DropdownButton from '../components/DropdownButton'
import Highcharts from '../components/Highcharts'
import { IProduct } from "../models/models";


export default function MainPage() {
  const [devices, setDevices] = useState<IProduct[]>([])
  const [category, setCategory] = useState<string>('Smartphones')


  const dispatch = useAppDispatch()
  const { error, loading, products } = useAppSelector(state => state.product)
  console.log(products, "products");

  useEffect(() => {
    devices && dispatch(fetchProducts())
  }, [])
  return (
    <div className='container mx-auto max-w-[800px] pt-5'>
      {loading && <p className='text-center text-lg'>Loading...</p>}
      {error && <p className='text-center text-red-600'>{error}</p>}
      <DropdownButton setCategory={setCategory} />
      <Highcharts products={products} category={category} />
      <div className='container mx-auto max-w[760px] pt-5'>
        {products.map(el => <ProductCard key={el.id} product={el} />)}
      </div>
    </div>
  )
}
