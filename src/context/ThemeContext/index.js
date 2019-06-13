import React, { useContext } from "react"

const ThemeContext = React.createContext()

function useThemeContext() {
  const context = useContext(ThemeContext)
  if (!context) return false
  return context
}

function ThemeContextProvider({ children }) {
  const value = {
    primary: "#3F51B5",
    primaryVariant: "#303F9F",
    secondary: "#81D4FA",
    secondaryVariant: "#29B6F6",
    background: "#FFFFFF",
    surface: "#FFFFFF",
    error: "#B00020",
  }
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export { ThemeContextProvider, useThemeContext }
