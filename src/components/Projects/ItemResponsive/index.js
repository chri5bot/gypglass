import React from "react"
import { withPrefix } from "gatsby-link"

import { Container } from "./styles"
import { Title, Description } from "../styles"

function ItemResponsive({ name, slug, image, description }) {
  console.log("slug", slug)
  return (
    <Container>
      <img
        src={withPrefix(`/projects/${slug}/${image}`)}
        alt={slug}
        width={"100%"}
        height={"auto"}
      />
      <Title>{name}</Title>
      <Description>{description}</Description>
    </Container>
  )
}

export default ItemResponsive
