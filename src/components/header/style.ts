import styled from 'styled-components'
import { colors } from '../../stylesGlobal'

export const Header = styled.header`
    grid-column: 1 / 3;
    background-color: ${colors.formBackground};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TitleHeader = styled.h1`
    font-weight: 600;
    font-size: 3.0rem;
`