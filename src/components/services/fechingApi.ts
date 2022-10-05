import axios from 'axios'
import { CreateProduct } from '../interfaces/types'

const url = 'http://localhost:3000/products'

export const getProducts = async () => {
    const data = await axios.get(url)
    return data.data
}

export const postProducts = async (body: CreateProduct) => {
    const res = await axios.post(url, body)
    return res
}

export const deleteProducts = async (id: number | undefined) => {
    const res = await axios.delete(`${url}/${id}`)
    return res
}

export const updateProducts = async (id: number | undefined, body: any) => {
    const res = await axios.put(`${url}/${id}`, body)
    return res
}