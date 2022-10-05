import styled from 'styled-components'
import { colors } from '../../stylesGlobal'

export const ContainerForm = styled.div`
    width: 350px;
    height: 300px;
    background-color: ${colors.background2};
    margin-top: 20px;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const Text = styled.h3`
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: -20px;
    color: ${colors.background};
`

export const BoxButton = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
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

