import { TextField } from '@mui/material'
import { ContainerForm, Text, BoxButton, Button } from './style'
import { useContext } from 'react'
import { context } from '../context/context'

export const UpdateForm = () => {
    const { onlyProd, upChangePrice, upChangePro, handleUpdate, valueUpPrice, valueUpProduct } = useContext(context)
    console.log(valueUpPrice)

    return (
        
            <>
            
            <ContainerForm>
                    
                    <Text>
                        {onlyProd?.name}
                    </Text>

                    <TextField
                    id="standard-basic" 
                    label="Name Product" 
                    variant="standard"
                    sx={{width: '70%'}}
                    onChange={upChangePro}
                    value={valueUpProduct}
                    />

                    <Text>
                        {onlyProd?.price}
                    </Text>

                    <TextField
                    id="standard-basic" 
                    label="Price" 
                    variant="standard"
                    sx={{width: '70%'}}
                    onChange={upChangePrice}
                    value={valueUpPrice}
                    />

                    <BoxButton>
                        <Button onClick={() => handleUpdate(onlyProd?.id)}>Save</Button>
                    </BoxButton>
                
                </ContainerForm>
            
            </>
    )
}