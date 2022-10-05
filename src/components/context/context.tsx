import { createContext } from 'react'
import { ContextInterface } from '../interfaces/types'
import { useGet } from '../hooks/useGet'
import { usePost } from '../hooks/usePost'
import { useDele } from '../hooks/useDele'
import { useToggle } from '../hooks/useToggle'
import { useUpdate } from '../hooks/useUpdate'
import { useSearch } from '../hooks/useSearch'

interface Props {
    children: JSX.Element | JSX.Element[]
}

const context = createContext<ContextInterface>({} as ContextInterface)

const ProviderContext: React.FunctionComponent<Props> = ({ children }) => {
    // HOOK PARA TRAER LA INFORMACION DE LA API
    const { newProduct, setNewProduct } = useGet()
    // HOOK PARA AGREGAR Y ENVIAR UN PRODUCTO A LA API
    const { namePro, price, handleChangePrice, handleChangePro, handleSubmit } = usePost(setNewProduct)
    // HOOK PARA ELIMINAR UN PRODUCTO
    const { handleDelete } = useDele(setNewProduct, newProduct)
    // HOOK PARA RENDERISAR EL FORM DE UPDATE Y AISLAR EL PRODYCTO QUE SE QUIERE ACTUALIZAR
    const { render, handleRender, onlyProd, findProduct } = useToggle(false, newProduct)
    // HOOK QUE MANEJA LOS VALORES DEL FROM DE UPDATE Y CAUSA EL EVENTO DE ACTIALIZACION DE UN PRODUCTO
    const {  handleUpdate, upChangePrice, upChangePro, valueUpPrice, valueUpProduct  } = useUpdate(onlyProd, newProduct, handleRender, setNewProduct)
    // HOOK PARA HACER EL FILTRADO DEPENDIENDO DE LO QUE ESCRIBA EN EL SEARCH
    const { searchChange, filterProducts } = useSearch(newProduct)

    return (
        <context.Provider value={{
            namePro,
            price,
            handleChangePrice,
            handleChangePro,
            handleSubmit,
            newProduct,
            setNewProduct,
            handleDelete,
            render,
            handleRender,
            onlyProd,
            handleUpdate,
            upChangePrice,
            upChangePro,
            findProduct,
            valueUpPrice,
            valueUpProduct,
            searchChange,
            filterProducts
        }}>
            {children}
        </context.Provider>
    )
}

export { ProviderContext, context }