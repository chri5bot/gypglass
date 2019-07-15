import styled from "styled-components"
import { Link } from "gatsby"

export const StyledLink = styled(Link)`
  color: black;
  &:hover {
    text-decoration: underline;
  }
`

export const Breadcrum = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
`
