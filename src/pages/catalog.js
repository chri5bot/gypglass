import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Products from "../components/Products"
import Catalog from "../components/Catalog"
import * as Grid from "../components/Grid"

function CatalogPage({ location }) {
  const { state: stateFromHome } = location

  return (
    <Layout>
      <SEO title="Catálogo" />
      <Grid.Container>
        <Grid.Row>
          <Grid.Column>
            <Catalog></Catalog>
          </Grid.Column>
        </Grid.Row>
      </Grid.Container>

      <Products stateFromHome={stateFromHome} />
    </Layout>
  )
}

export default CatalogPage
