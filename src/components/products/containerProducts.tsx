import { Products } from './styled'
import { ItemsProducts } from './items.Products'
import { UpdateForm } from '../updateForm/updateForm'
import { context } from '../context/context'
import { useContext } from 'react'

export const ContainerProducts = () => {
    const { render } = useContext(context)

    return (
        <Products>

            {
                !render
                ?<ItemsProducts/>
                :<UpdateForm/>
            }

        </Products>
    )
}