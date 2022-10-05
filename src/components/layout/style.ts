import styled from 'styled-components'
import { colors } from '../../stylesGlobal'

export const LayoutContainer = styled.div`
  width: 100%; 
  min-height: 100vh;
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-template-rows: 15% 1fr;
  background-color: ${colors.background};
`
