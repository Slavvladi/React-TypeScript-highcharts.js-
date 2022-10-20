import axios from 'axios'
import { ServerResponse } from '../../models/models'
import { AppDispatch } from '../index'
import { productSlice } from '../slices/productSlice'


export const fetchProducts = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(productSlice.actions.fetching())
            const response = await axios.get<ServerResponse>('https://dummyjson.com/products')
            const smart = response.data.products.filter(el => el.category === "smartphones")
            const lap = response.data.products.filter(el => el.category === "laptops")
            const smartLap = smart.concat(lap)
            dispatch(productSlice.actions.fetchSuccess(
                smartLap
            ))
        } catch (e) {
            dispatch(productSlice.actions.fetchError(e as Error))

        }
    }
}
