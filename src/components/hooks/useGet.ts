import { useState, useEffect } from 'react'
import { CreateProduct } from '../interfaces/types'
import { getProducts } from '../services/fechingApi'

export const useGet = () => {
    const [newProduct, setNewProduct] = useState<Array<CreateProduct>>([])

    useEffect(() => {
        getProducts()
        .then(el => setNewProduct(el))
    }, [])

    return { newProduct, setNewProduct }
}