import React from "react"
import { withPrefix } from "gatsby-link"
import { Container } from "./styles"
import { useThemeContext } from "../../../context"

import { Title } from "../styles"

import { NavButton } from "../../Buttons"

function Item({ name, slug, image }) {
  const { colors } = useThemeContext()

  return (
    <Container colors={colors}>
      <img
        src={withPrefix(`/products/${slug}/${image}`)}
        alt={slug}
        width={"100%"}
        height={"auto"}
      />
      <Title>{name}</Title>
      <NavButton to={slug}>Ver más</NavButton>
    </Container>
  )
}

export default Item
