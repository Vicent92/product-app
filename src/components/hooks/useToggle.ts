import { useState } from 'react'
import { CreateProduct } from '../interfaces/types'

export const useToggle = (initialValue: boolean, data: CreateProduct[]) => {
    const [render, setRender] = useState(initialValue)
    const [onlyProd, setOnlyProd] = useState<CreateProduct | undefined>()
    
    const handleRender = () => {
        setRender(el => !el)
    }

    const findProduct = (id: number | undefined) => {
        const product = data.find(el => el.id === id)
        setOnlyProd(product)
        handleRender()
    }
    console.log(onlyProd)

    return {render, handleRender, onlyProd, findProduct}
}