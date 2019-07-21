import React from "react"
import banner from "../../images/banner.png"
import { StyledContainer } from "./styles"
import pdf from "../../images/GYPGLASS CATALOGO-1.pdf"

function Catalog() {
  return (
    <StyledContainer href={pdf} target="_blank">
      <img src={banner} atl="banner" width="900"></img>
    </StyledContainer>
  )
}

export default Catalog
