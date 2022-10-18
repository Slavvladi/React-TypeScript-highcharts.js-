import axios from 'axios'
import { ServerResponse } from '../../models/models'
import { AppDispatch } from '../index'
import { productSlice } from '../slices/productSlice'


export const fetchProducts = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(productSlice.actions.fetching())
            const response = await axios.get<ServerResponse>('https://dummyjson.com/products')
            console.log(response);
            dispatch(productSlice.actions.fetchSuccess(
                response.data.products
            ))
        } catch (e) {
            dispatch(productSlice.actions.fetchError(e as Error))

        }
    }
}

export const fetchSmartphones = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(productSlice.actions.fetching())
            const response = await axios.get<ServerResponse>('https://dummyjson.com/products')
            console.log(response);
            dispatch(productSlice.actions.fetchSuccess(
                response.data.products.filter(el => el.category === "smartphones")
            ))
        } catch (e) {
            dispatch(productSlice.actions.fetchError(e as Error))

        }
    }
}

export const fetchLaptops = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(productSlice.actions.fetching())
            const response = await axios.get<ServerResponse>('https://dummyjson.com/products')
            console.log(response);
            dispatch(productSlice.actions.fetchSuccess(
                response.data.products.filter(el => el.category === "laptops")
            ))
        } catch (e) {
            dispatch(productSlice.actions.fetchError(e as Error))

        }
    }
}