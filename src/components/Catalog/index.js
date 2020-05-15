import React from "react"
import { StyledContainer } from "./styles"
import pdf from "../../images/GYPGLASS CATALOGO-1.pdf"

function Catalog() {
  return (
    <StyledContainer href={pdf} target="_blank">
      <img src="https://i.imgur.com/DtzSMLX.jpg" alt="banner" width="100%"></img>
    </StyledContainer>
  )
}

export default Catalog
