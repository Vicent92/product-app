import { useState, useMemo } from 'react'
import { CreateProduct } from '../interfaces/types'

export const useSearch = (products: CreateProduct[]) => {
    const [searchValue, setSearchValue] = useState('')

    const searchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = e.target
        setSearchValue(value)
    }

    const filterProducts = useMemo(() => 
    products.filter(el => {
        return el.name?.toLowerCase().includes(searchValue)
    }),
    [products, searchValue]
    )

    return {
        searchChange,
        filterProducts
    }
}