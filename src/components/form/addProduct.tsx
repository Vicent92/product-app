import { Form, Button } from './style'
import { TextField } from '@mui/material'
import { context } from '../context/context'
import { useContext } from 'react'

export const AddProduct = () => {
   const {
        namePro,
        price,
        handleChangePrice,
        handleChangePro,
        handleSubmit
    } = useContext(context)

    return (
        <Form onSubmit={handleSubmit}>
            <TextField
            sx={{width: '50%'}}
            id="standard-basic" 
            label="Name Product" 
            variant="standard"
            color='secondary'
            value={namePro}
            onChange={handleChangePro}
            />

            <TextField
            sx={{width: '50%'}}
            id="standard-basic" 
            label="Price" 
            variant="standard"
            value={price}
            onChange={handleChangePrice}
            />

            <Button>Add</Button>
        </Form>
    )
} 