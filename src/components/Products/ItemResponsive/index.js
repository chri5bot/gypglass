import React from "react"
import { Link } from "gatsby"

import { Container } from "./styles"
import { Title } from "../styles"

function ItemResponsive({ name, slug, image, description }) {
  return (
    <Link to={`/${slug}`}>
      <Container>
        <img
           src={image}
          alt={slug}
          width={"100%"}
          height={"auto"}
        />
        <Title>{name}</Title>
      </Container>
    </Link>
  )
}

export default ItemResponsive
