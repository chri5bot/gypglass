import React from "react"
import { useThemeContext } from "../../context"

import { Title, NavButtonContainer } from "./styles"

export const NavButton = ({ to, children }) => {
  const { colors } = useThemeContext()

  return (
    <NavButtonContainer colors={colors} to={`/${to}`}>
      <Title>{children}</Title>
    </NavButtonContainer>
  )
}
