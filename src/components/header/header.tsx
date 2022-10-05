import { Header, TitleHeader } from './style'
import { TextField } from '@mui/material'
import { context } from '../context/context'
import { useContext } from 'react'

export const HeaderProduct = () => {
    const { searchChange } = useContext(context)

    return (
        <Header>
            <TitleHeader>
                Product List
            </TitleHeader>

            <TextField
            id="outlined-basic" 
            label="Search Product" 
            variant="outlined"
            sx={{width: '30%'}}
            onChange={searchChange}
            />
        </Header>
    )
}