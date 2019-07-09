import React, { useContext, useState, useEffect } from "react"

const MobileContext = React.createContext()

function useIsMobile(initialIsMobile) {
  const [isMobile, setIsMobile] = useState(initialIsMobile)

  useEffect(() => {
    const handleResize = () => {
      const mql = window.matchMedia(`(max-width: 767px)`)
      setIsMobile(mql.matches)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  return isMobile
}

function useMobileContext() {
  const context = useContext(MobileContext)
  if (!context) return false
  return context
}

function MobileContextProvider({ children }) {
  const initialMql = window.matchMedia(`(max-width: 767px)`)
  const isMobile = useIsMobile(initialMql.matches)

  const value = {
    isMobile,
  }
  return (
    <MobileContext.Provider value={value}>{children}</MobileContext.Provider>
  )
}

export { MobileContextProvider, useMobileContext }
