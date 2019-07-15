import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import * as Grid from "../components/Grid"

import { StyledLink, Breadcrum } from "./styles"

function ProductTemplate({
  data: {
    productsJson: { name, brand, image, technicalInformation, description },
  },
}) {
  return (
    <Layout>
      <SEO title={name} />
      <Grid.Container>
        <Grid.Row>
          <Grid.Column md={12}>
            <Breadcrum>
              <StyledLink to="/catalog">Catálogo</StyledLink>
              &nbsp;
              <span>/</span>
              &nbsp;
              <span> {name}</span>
            </Breadcrum>
          </Grid.Column>
        </Grid.Row>
      </Grid.Container>
    </Layout>
  )
}

export const query = graphql`
  query ProductsQuery($slug: String!) {
    productsJson(slug: { eq: $slug }) {
      name
      slug
      brand
      image
      technicalInformation {
        dimensions
        densities
        lengths
        borders
        thermalResistances
        colors
      }
      description
    }
  }
`

export default ProductTemplate
