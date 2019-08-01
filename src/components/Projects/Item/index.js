import React from "react"
import { withPrefix } from "gatsby-link"
import { Container, ImageResponsive } from "./styles"
import { useThemeContext } from "../../../context"

import { Title, Description } from "../styles"

function Item({ name, slug, image, description }) {
  const { colors } = useThemeContext()

  return (
    <Container colors={colors}>
      <ImageResponsive
        src={withPrefix(`/projects/${slug}/${image}`)}
        alt={slug}
      />
      <Title>{name}</Title>
      <Description>{description}</Description>
    </Container>
  )
}

export default Item
