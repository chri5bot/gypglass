import styled from "styled-components"

export const StyledHeader = styled.header`
  background-color: ${props => props.colors && props.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  box-shadow: rgba(67, 70, 89, 1) 0px 0px 10px 0px;
`
