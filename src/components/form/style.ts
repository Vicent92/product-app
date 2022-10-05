import styled from 'styled-components'
import { colors } from '../../stylesGlobal'

// Container of form
export const ContainerForm = styled.div`
    background-color: ${colors.background2};
`

// Form to add products
export const Form = styled.form`
    width: 100%;
    height: 60%;
    /* background-color: red; */

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const Button = styled.button`
    width: 25%;
    height: 30px;
    background-color: ${colors.button};
    border: none;
    border-radius: 5px;
    cursor: pointer;
`