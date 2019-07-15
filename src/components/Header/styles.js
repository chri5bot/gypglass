import styled from "styled-components"
import { Link } from "gatsby"

import media from "../../styles/media"

export const StyledHeader = styled.div`
  background-color: ${props => props.colors && props.colors.primary};
  z-index: 1;
  box-shadow: rgba(67, 70, 89, 1) 0px 0px 10px 0px;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  color: white;
  justify-content: space-between;
`

export const StyledNav = styled.nav`
  display: none;
  ${media.sm`
    display: flex;
  `};
`

export const StyledLink = styled(Link)`
  margin: 0 1rem;
`
