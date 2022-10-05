import styled from 'styled-components'
import { colors } from '../../stylesGlobal'

// Container to products

export const Products = styled.div`
    width: 90%;
    max-width: 1200px;
    /* background-color: red; */
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

// Items to products

export const ContainerItemsProducts = styled.div`
    width: 300px;
    height: 200px;
    background-color: ${colors.button};
    margin-right: 30px;
    margin-left: 10px;
    margin-top: 20px;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
export const TextItemsProducts = styled.h4`
    font-size: 2.5rem;
`
export const BoxButton = styled.div`
    width: 70%;
    height: auto;
    
    display: flex;
    justify-content: space-evenly;
`
export const Button = styled.button`
    width: 70px;
    height: 30px;
    background-color: ${colors.background2};
    border: none;
    border-radius: 5px;
    cursor: pointer;
`
