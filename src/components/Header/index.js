import React from "react"

import { Link } from "gatsby"
import PropTypes from "prop-types"

import { useThemeContext } from "../../context"

const Header = ({ siteTitle }) => {
  const { hey } = useThemeContext()

  console.log(hey)
  return (
    <header>
      <div>
        <Link to="/">{siteTitle}</Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
