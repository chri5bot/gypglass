import React, { useContext } from "react"

const ThemeContext = React.createContext()

function useThemeContext() {
  const context = useContext(ThemeContext)
  if (!context) return false
  return context
}

function ThemeContextProvider({ children }) {
  const value = {
    colors: {
      primary: "#262C41",
      primaryVariant: "#303F9F",
      secondary: "#D3A200",
      secondaryVariant: "#D3A200",
      error: "#B00020",
    },
  }
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export { ThemeContextProvider, useThemeContext }
