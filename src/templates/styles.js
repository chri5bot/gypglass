import styled from "styled-components"
import { Link } from "gatsby"

import media from "../styles/media"

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
  min-height: 98.4%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  ${media.sm`
    margin-top: 0;
  `};
`
export const Description = styled.p`
  text-align: justify;
`
export const ContactUs = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`

export const TechnicalDescription = styled.div`
  box-shadow: rgb(217, 217, 217) 0px 2px 4px 0px;
  padding: 1rem;
`
export const StyledTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
  margin-top: 1rem;
`
export const StyledThead = styled.thead`
  background-color: #f2f2f2;
`

export const StyledTd = styled.td`
  text-align: left;
  padding: 8px;
`

export const TableContainer = styled.div`
  overflow-x: auto;
`
