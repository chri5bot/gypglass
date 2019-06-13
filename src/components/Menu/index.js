import React, { useState } from "react"
import BurgerMenu from "react-burger-menu"

import { useThemeContext } from "../../context"

import { MenuContainer, StyledLink, styles } from "./styles"

function Menu() {
  const [isOpen] = useState(false)

  const { colors } = useThemeContext()

  const activeStyle = {
    color: colors.secondary,
  }

  const BurgerMenuSlide = BurgerMenu["slide"]

  return (
    <MenuContainer>
      <BurgerMenuSlide id="slide" right styles={styles} isOpen={isOpen}>
        <StyledLink key="home" to="/" activeStyle={activeStyle}>
          Inicio
        </StyledLink>
        <StyledLink key="about" to="/about-us" activeStyle={activeStyle}>
          Nosotros
        </StyledLink>
        <StyledLink key="catalog" to="/catalog" activeStyle={activeStyle}>
          Catálogo
        </StyledLink>
        <StyledLink key="projects" to="/projects" activeStyle={activeStyle}>
          Proyectos
        </StyledLink>
        <StyledLink key="contact" to="/contact-us" activeStyle={activeStyle}>
          Contáctanos
        </StyledLink>
      </BurgerMenuSlide>
    </MenuContainer>
  )
}

export default Menu
