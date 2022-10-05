import { LayoutContainer } from './style'
import { HeaderProduct } from '../header/header'
import { FormProduct } from '../form/form'
import { ContainerProducts } from '../products/containerProducts'

export const Layout = () => {
    return (
        <LayoutContainer>
            <HeaderProduct/>

            <FormProduct/>

            <ContainerProducts/>
        </LayoutContainer>
    )
}