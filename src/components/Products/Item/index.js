import React from "react"

import { Container } from "./styles"
import { useThemeContext } from "../../../context"

function Item({ name }) {
  const { colors } = useThemeContext()
  return (
    <Container colors={colors}>
      <span>{name}</span>
    </Container>
  )
}

export default Item
