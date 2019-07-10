import React from "react"

import { Container } from "./styles"

function ItemResponsive({ name }) {
  return (
    <Container>
      <span>{name}</span>
    </Container>
  )
}

export default ItemResponsive
