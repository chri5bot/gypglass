import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { StickyContainer } from "react-sticky"

import Header from "../Header"
import Footer from "../Footer"
import * as Grid from '../Grid'

import { ContextProviders } from "../../context"

import { GlobalStyle } from "../../styles/reset.css"

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
          <Header siteTitle={data.site.siteMetadata.title} />
          <Grid.Container>
            <main>{children}</main>
            <Footer />
          </Grid.Container>
        </StickyContainer>
      </ContextProviders>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
