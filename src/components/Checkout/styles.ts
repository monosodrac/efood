import styled from 'styled-components'
import { colors } from '../../styles'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Row = styled.div`
  display: flex;
  column-gap: 34px;
`

export const InputGroup = styled.div`
  flex: auto;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    font-size: 14px;
  }

  input {
    padding: 8px;
    border: 1px solid ${colors.white};
    height: 32px;
    width: 100%;
    font-weight: bold;
    font-size: 14px;
    background-color: ${colors.white};
    color: #4B4B4B;
  }
`
