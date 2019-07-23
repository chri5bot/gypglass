import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { StickyContainer } from "react-sticky"

import Header from "../Header"
import Footer from "../Footer"
import FooterContact from "../FooterContact"
import Menu from "../../components/Menu"

import { ContextProviders } from "../../context"

import { GlobalStyle } from "../../styles/reset.css"

import { StyledFooter, StyledFooterContact } from "./styles"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ContextProviders>
        <StickyContainer>
          <GlobalStyle />
          <Menu />
          <header>
            <Header siteTitle={data.site.siteMetadata.title} />
          </header>
          <div>
            <main>{children}</main>
            <StyledFooter>
              <Footer />
            </StyledFooter>
            <StyledFooterContact>
              <FooterContact></FooterContact>
            </StyledFooterContact>
          </div>
        </StickyContainer>
      </ContextProviders>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
