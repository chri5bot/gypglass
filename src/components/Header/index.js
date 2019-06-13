import React from "react"
import { Sticky } from "react-sticky"

import { Link } from "gatsby"
import PropTypes from "prop-types"

import { useThemeContext } from "../../context"

import { StyledHeader } from "./styles"

const Header = ({ siteTitle, style }) => {
  const { colors } = useThemeContext()

  return (
    <Sticky>
      {({ style }) => (
        <StyledHeader style={style} colors={colors}>
          <div>
            <Link to="/">{siteTitle}</Link>
          </div>
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
