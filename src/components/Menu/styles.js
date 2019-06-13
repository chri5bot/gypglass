import styled from "styled-components"
import { Link } from "gatsby"

import media from "../../styles/media"

export const MenuContainer = styled.div`
  ${media.sm`
    display: none;
  `};
`

export const StyledLink = styled(Link)`
  margin: 1rem;
`

export const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "1.5rem",
    height: "1.25rem",
    right: "1rem",
    top: "2rem",
  },
  bmBurgerBars: {
    background: "white",
  },
  bmCrossButton: {
    height: "1.5rem",
    width: "1.5rem",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenu: {
    background: "#373a47",
    padding: "1rem",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "flex",
    flexDirection: "column",
  },
}
