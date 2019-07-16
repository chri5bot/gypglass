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
export const Container = styled.div`
  box-shadow: rgb(217, 217, 217) 0px 2px 4px 0px;
  height: 98.4%;
  padding: 1rem;
`
