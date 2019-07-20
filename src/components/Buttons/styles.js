import styled from "styled-components"
import { Link } from "gatsby"

export const NavButtonContainer = styled(Link)`
  text-transform: uppercase;
  width: ${props => (props.width ? props.width : "100%")};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.colors && props.colors.secondaryVariant};
  color: white;
  padding: 0.5rem 0;
  border-radius: 20px;
`
export const Title = styled.h6`
  margin: auto;
  padding-top: 3px;
`
