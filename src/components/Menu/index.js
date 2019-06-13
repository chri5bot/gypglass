import React, { useState } from "react"
import BurgerMenu from "react-burger-menu"

import { useThemeContext } from "../../context"

import { MenuContainer, StyledLink, styles } from "./styles"

function Menu() {
  const [isOpen] = useState(false)

  const BurgerMenuSlide = BurgerMenu["slide"]

  const { colors } = useThemeContext()

  const activeStyle = {
    color: colors.secondary,
  }

  const items = [
    <StyledLink to="/" activeStyle={activeStyle}>
      Inicio
    </StyledLink>,
    <StyledLink to="/about-us" activeStyle={activeStyle}>
      Nosotros
    </StyledLink>,
    <StyledLink to="/catalog" activeStyle={activeStyle}>
      Catálogo
    </StyledLink>,
    <StyledLink to="/projects" activeStyle={activeStyle}>
      Proyectos
    </StyledLink>,
    <StyledLink to="/contact-us" activeStyle={activeStyle}>
      Contáctanos
    </StyledLink>,
  ]

  return (
    <MenuContainer>
      <BurgerMenuSlide id="slide" right styles={styles} isOpen={isOpen}>
        {items}
      </BurgerMenuSlide>
    </MenuContainer>
  )
}

export default Menu
