import React from "react"
import { withPrefix } from "gatsby-link"
import { Container } from "./styles"
import { useThemeContext } from "../../../context"

function Item({ name, slug, image }) {
  const { colors } = useThemeContext()
  console.log(`/products/${slug}/${image}`)
  return (
    <Container colors={colors}>
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

export default Item
