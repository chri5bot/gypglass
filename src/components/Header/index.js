import React from "react"
import { Sticky } from "react-sticky"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import { useThemeContext } from "../../context"

import * as Grid from "../../components/Grid"

import { StyledLink, StyledNav, StyledHeader, Container } from "./styles"

const Header = ({ siteTitle }) => {
  const { colors } = useThemeContext()

  const activeStyle = {
    color: colors.secondary,
    borderBottom: `solid 2px ${colors.secondary}`,
  }

  return (
    <Sticky>
      {({ style }) => (
        <StyledHeader style={style} colors={colors}>
          <Grid.Container>
            <Container>
              <Link to="/">
                {/* <h1>{siteTitle}</h1> */}
                <img src="https://i.imgur.com/aqpdw7u.png" width={180} alt="white-logo"></img>
              </Link>
              <StyledNav>
                <StyledLink to="/" activeStyle={activeStyle}>
                  Inicio
                </StyledLink>
                <StyledLink to="/about-us" activeStyle={activeStyle}>
                  Nosotros
                </StyledLink>
                <StyledLink to="/catalog" activeStyle={activeStyle}>
                  Catálogo
                </StyledLink>
                {/* <StyledLink to="/projects" activeStyle={activeStyle}>
                  Proyectos
                </StyledLink> */}
                <StyledLink to="/contact-us" activeStyle={activeStyle}>
                  Contáctanos
                </StyledLink>
              </StyledNav>
            </Container>
          </Grid.Container>
        </StyledHeader>
      )}
    </Sticky>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
