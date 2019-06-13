import React from "react"
import { Sticky } from "react-sticky"

import { Link } from "gatsby"
import PropTypes from "prop-types"

import { useThemeContext } from "../../context"

import * as Grid from "../../components/Grid"

import { StyledHeader } from "./styles"

const Header = ({ siteTitle, style }) => {
  const { colors } = useThemeContext()

  return (
    <Sticky>
      {({ style }) => (
        <StyledHeader style={style} colors={colors}>
          <Grid.Container>
            <Link to="/">
              <h1>{siteTitle}</h1>
            </Link>
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
