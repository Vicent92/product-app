import { CreateProduct } from '../interfaces/types'
import { deleteProducts } from '../services/fechingApi'

export const useDele = (
    setNewProduct: React.Dispatch<React.SetStateAction<CreateProduct[]>>, 
    newProduct: CreateProduct[]) => {
    
    const handleDelete = (id: number | undefined) => {
        const index = newProduct.findIndex(el => el.id === id)
        const newProd = [...newProduct]
        newProd.splice(index, 1)
        setNewProduct(newProd)
        deleteProducts(id)
    }

    return {handleDelete}
}