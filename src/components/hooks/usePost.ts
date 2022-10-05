import { useState } from 'react'
import { postProducts } from '../services/fechingApi'
import { CreateProduct } from '../interfaces/types'

export const usePost = (setNewProduct: React.Dispatch<React.SetStateAction<CreateProduct[]>>) => {
    const [namePro, setNamePro ] = useState('')
    const [price, setPrice ] = useState('')

    const handleChangePro = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = e.target
        console.log(value)
        setNamePro(value)
    }

    const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = e.target
        console.log(value)
        setPrice(value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newProd = {
            name: namePro,
            price: Number(price)
        }
        setNewProduct(el => el.concat(newProd))
        postProducts(newProd)
    }

    return {
        namePro,
        price,
        handleChangePro,
        handleChangePrice,
        handleSubmit
    }
}