import styled from "styled-components"
import { Link } from "gatsby"
import media from "../../styles/media"

export const NavButtonContainer = styled(Link)`
  text-transform: uppercase;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.colors && props.colors.secondaryVariant};
  color: white;
  padding: 0.7rem 0;
  border-radius: 1rem;

  ${media.sm`
    width: ${props => (props.width ? props.width : "100%")};
  `};
`
export const Title = styled.h6`
  margin: auto;
  padding-top: 3px;
`
