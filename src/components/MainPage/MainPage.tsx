import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../../store/actions/productActions'
import { useAppDispatch, useAppSelector } from '../../hook/redux'
import ProductCard from '../ProductCard/ProductCard'
import DropdownButton from '../DropdownButton'
import Highcharts from '../Highcharts'
import { IProduct } from "../../models/models";
import Spinner from '../Spinner/Spinner'


export default function MainPage() {
  const [devices, setDevices] = useState<IProduct[]>([])
  const [category, setCategory] = useState<string>('Smartphones')


  const dispatch = useAppDispatch()
  const { error, loading, products } = useAppSelector(state => state.product)

  useEffect(() => {
    devices && dispatch(fetchProducts())
  }, [])
  return (
    <>
      <div className='justify-center flex-wrap container mx-auto max-w-[800px] pt-5'>
        {error && <p className='text-center text-red-600'>{error}</p>}
        <DropdownButton setCategory={setCategory} />
        {loading ? <Spinner /> : <Highcharts products={products} category={category} />}
        <div className='flex flex-wrap justify-between'>
          {products.map(el => <ProductCard key={el.id} product={el} />)}
        </div>
      </div>
    </>
  )
}
