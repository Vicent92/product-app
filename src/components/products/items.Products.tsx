import { context } from '../context/context'
import { useContext } from 'react'
import { ContainerItemsProducts, TextItemsProducts, Button, BoxButton } from './styled'

export const ItemsProducts = () => {
    const { handleDelete, findProduct, filterProducts } = useContext(context)

    return (
        <>
        
            {
                filterProducts.map(pdt => (
                    <ContainerItemsProducts>

                        <TextItemsProducts>Name: {pdt.name}</TextItemsProducts>
                        <TextItemsProducts>Price: {pdt.price}</TextItemsProducts>

                        <BoxButton>
                            <Button onClick={() => findProduct(pdt.id)}>Edit</Button>
                            <Button onClick={() => handleDelete(pdt.id)}>Delete</Button>
                        </BoxButton>

                    </ContainerItemsProducts>
                ))
            }
        
        </>
    )
}