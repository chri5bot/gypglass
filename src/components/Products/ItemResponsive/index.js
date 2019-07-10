import React from "react"
import { withPrefix } from "gatsby-link"

import { Container } from "./styles"

function ItemResponsive({ name, slug, image }) {
  return (
    <Container>
      <img
        src={withPrefix(`/products/${slug}/${image}`)}
        alt={slug}
        width={"100%"}
        height={"auto"}
      />
      <span>{name}</span>
    </Container>
  )
}

export default ItemResponsive
