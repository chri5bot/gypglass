import React from "react"
import PropTypes from "prop-types"

import { ThemeContextProvider } from "./ThemeContext"

export const ContextProviders = ({ children }) => (
  <ThemeContextProvider>{children}</ThemeContextProvider>
)
ContextProviders.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
}
