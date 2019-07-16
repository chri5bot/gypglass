import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import * as Grid from "../components/Grid"
import SliderProduct from "../components/SliderProduct"

import { StyledLink, Breadcrum, Container } from "./styles"

function ProductTemplate({
  data: {
    productsJson: { name, slug, image },
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
        <Grid.Row>
          <Grid.Column md={6}>
            <SliderProduct slug={slug} image={image} />
          </Grid.Column>
          <Grid.Column md={6}>
            <Container>hey</Container>
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
