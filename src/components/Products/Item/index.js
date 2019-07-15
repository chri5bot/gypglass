import React from "react"
import { withPrefix } from "gatsby-link"
import { Container, ImageResponsive } from "./styles"
import { useThemeContext } from "../../../context"

import { Title } from "../styles"

import { NavButton } from "../../Buttons"

function Item({ name, slug, image }) {
  const { colors } = useThemeContext()

  return (
    <Container colors={colors}>
      <ImageResponsive
        src={withPrefix(`/products/${slug}/${image}`)}
        alt={slug}
      />
      <Title>{name}</Title>
      <NavButton to={slug}>Ver más</NavButton>
    </Container>
  )
}

export default Item
