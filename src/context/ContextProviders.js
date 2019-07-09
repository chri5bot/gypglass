import React from "react"
import PropTypes from "prop-types"

import { ThemeContextProvider } from "./ThemeContext"
import { MobileContextProvider } from "./MobileContext"

export const ContextProviders = ({ children }) => (
  <ThemeContextProvider>
    <MobileContextProvider>{children}</MobileContextProvider>
  </ThemeContextProvider>
)
ContextProviders.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
}
