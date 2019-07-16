import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import * as Grid from "../components/Grid"
import SliderProduct from "../components/SliderProduct"
import { NavButton } from "../components/Buttons"

import {
  StyledLink,
  Breadcrum,
  Container,
  Description,
  ContactUs,
  TechnicalDescription,
} from "./styles"

function ProductTemplate({
  data: {
    productsJson: { name, slug, image, category, description },
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
            <Container>
              <h3>{name}</h3>
              <span>
                <span style={{ fontWeight: "bold" }}>Categoría:</span>{" "}
                {category}
              </span>
              {description && <Description>{description}</Description>}
              <ContactUs>
                <NavButton to="contact-us" width="50%">
                  contactar
                </NavButton>
              </ContactUs>
            </Container>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column md={12}>
            <h4>Descripción</h4>
          </Grid.Column>
          <Grid.Column md={12}>
            <TechnicalDescription>
              <span>FICHA TÉNICA</span>
              <table>
                <thead>
                  <tr>
                    <td>hey</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>hey</td>
                    <td>hey</td>
                  </tr>
                </tbody>
              </table>
            </TechnicalDescription>
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
      category
      description
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
