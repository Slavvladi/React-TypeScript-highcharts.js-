import React, { useEffect, useState } from 'react'
import { fetchLaptops, fetchProducts, fetchSmartphones } from '../store/actions/productActions'
import { useAppDispatch, useAppSelector } from '../hook/redux'
import ProductCard from '../components/ProductCard/ProductCard'
import DropdownButton from '../components/DropdownButton'
import { IProduct } from "../models/models";


export default function MainPage() {
  const [devices, setDevices] = useState<IProduct[]>([])
  const dispatch = useAppDispatch()
  const { error, loading, products } = useAppSelector(state => state.product)

  useEffect(() => {
    devices && dispatch(fetchProducts())
  }, [])
  return (
    <>
      <DropdownButton setDevices={setDevices} />
      <div className='container mx-auto max-w[760px] pt-5'>
        {products.map(el => <ProductCard key={el.id} product={el} />)}
      </div>
    </>

  )
}
