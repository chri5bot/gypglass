import React from "react"
import { Sticky } from "react-sticky"

import { Link } from "gatsby"
import PropTypes from "prop-types"

import { useThemeContext } from "../../context"

const Header = ({ siteTitle, style }) => {
  console.log("style", style)
  const { hey } = useThemeContext()

  console.log(hey)
  return (
    <Sticky>
      {({ style }) => (
        <header style={style}>
          <div>
            <Link to="/">{siteTitle}</Link>
          </div>
        </header>
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
