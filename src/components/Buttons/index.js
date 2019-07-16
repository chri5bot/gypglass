import React from "react"
import { useThemeContext } from "../../context"

import { Title, NavButtonContainer } from "./styles"

export const NavButton = ({ to, children, width }) => {
  const { colors } = useThemeContext()

  return (
    <NavButtonContainer colors={colors} to={`/${to}`} width={width}>
      <Title>{children}</Title>
    </NavButtonContainer>
  )
}
