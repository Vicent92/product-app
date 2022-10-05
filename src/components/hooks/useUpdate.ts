import { updateProducts } from '../services/fechingApi'
import { useState } from 'react'
import { CreateProduct } from '../interfaces/types'

export const useUpdate = (prod: CreateProduct | undefined, products: CreateProduct[], handleRender: () => void, setProduct: React.Dispatch<React.SetStateAction<CreateProduct[]>>) => {
    const [valueUpProduct, setValueUpProduct] = useState('')
    const [valueUpPrice, setValueUpPrice] = useState('')

    const upChangePro = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = e.target
        console.log(prod?.name)
        setValueUpProduct(value)
    }

    const upChangePrice = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = e.target
        console.log(value)
        setValueUpPrice(value)
    }

    const handleUpdate = (id: number | undefined) => {
        const findProd = products.findIndex(el => el.id === id)
        const copy = [...products]
        const data = copy[findProd]

        copy[findProd] = {
            ...data,
            name: !valueUpProduct ? prod?.name : valueUpProduct,
            price: !Number(valueUpPrice) ? prod?.price : Number(valueUpPrice)
        }

        const newPro = {
            ...data,
            name: !valueUpProduct ? prod?.name : valueUpProduct,
            price: !valueUpPrice ? prod?.price : valueUpPrice
            
        }

        setProduct(copy)
        updateProducts(id, newPro)
        handleRender()
    }

    return {
        handleUpdate,
        upChangePrice,
        upChangePro,
        valueUpPrice,
        valueUpProduct,
        setValueUpProduct,
        setValueUpPrice
    }

}