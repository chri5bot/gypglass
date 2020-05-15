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
  StyledTable,
  StyledThead,
  StyledTd,
  TableContainer,
} from "./styles"

function ProductTemplate({
  data: {
    productsJson: {
      name,
      slug,
      image,
      category,
      description,
      technicalInformation,
    },
  },
}) {
  const {
    borders,
    colors,
    dimensions,
    lengths,
    thermalResistances,
    densities,
    items,
  } = technicalInformation

  return (
    <Layout>
      <SEO title={name} />
      <Grid.Container style={{height: "80vh"}}>
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
              <span>Ficha Técnica</span>
              <TableContainer>
                <StyledTable>
                  <StyledThead>
                    <tr>
                      {items && items.length > 0 && <StyledTd>Items</StyledTd>}
                      {borders && borders.length > 0 && (
                        <StyledTd>Orilla</StyledTd>
                      )}
                      {colors && colors.length > 0 && (
                        <StyledTd>Color</StyledTd>
                      )}
                      {dimensions && dimensions.length > 0 && (
                        <StyledTd>Dimensión</StyledTd>
                      )}
                      {lengths && lengths.length > 0 && (
                        <StyledTd>Longitud</StyledTd>
                      )}
                      {thermalResistances && thermalResistances.length > 0 && (
                        <StyledTd>Resistencia Térmica "R"</StyledTd>
                      )}
                      {densities && densities.length > 0 && (
                        <StyledTd>Espesor (mm.)</StyledTd>
                      )}
                    </tr>
                  </StyledThead>
                  <tbody>
                    {(items && items.length > 0 && items[0]) ||
                    (borders && borders.length > 0 && borders[0]) ||
                    (colors && colors.length > 0 && colors[0]) ||
                    (dimensions && dimensions.length > 0 && dimensions[0]) ||
                    (lengths && lengths.length > 0 && lengths[0]) ||
                    (thermalResistances &&
                      thermalResistances.length > 0 &&
                      thermalResistances[0]) ||
                    (densities && densities.length > 0 && densities[0]) ? (
                      <tr>
                        {items[0] && <StyledTd>{items[0]}</StyledTd>}
                        {borders[0] && <StyledTd>{borders[0]}</StyledTd>}
                        {colors[0] && <StyledTd>{colors[0]}</StyledTd>}
                        {dimensions[0] && <StyledTd>{dimensions[0]}</StyledTd>}
                        {lengths[0] && <StyledTd>{lengths[0]}</StyledTd>}
                        {thermalResistances[0] && (
                          <StyledTd>{thermalResistances[0]}</StyledTd>
                        )}
                        {densities[0] && <StyledTd>{densities[0]}</StyledTd>}
                      </tr>
                    ) : null}
                    {(items && items.length > 0 && items[1]) ||
                    (borders && borders.length > 0 && borders[1]) ||
                    (colors && colors.length > 0 && colors[1]) ||
                    (dimensions && dimensions.length > 0 && dimensions[1]) ||
                    (lengths && lengths.length > 0 && lengths[1]) ||
                    (thermalResistances &&
                      thermalResistances.length > 0 &&
                      thermalResistances[1]) ||
                    (densities && densities.length > 0 && densities[1]) ? (
                      <tr>
                        {items[1] && <StyledTd>{items[1]}</StyledTd>}
                        {borders[1] && <StyledTd>{borders[1]}</StyledTd>}
                        {colors[1] && <StyledTd>{colors[1]}</StyledTd>}
                        {dimensions[1] && <StyledTd>{dimensions[1]}</StyledTd>}
                        {lengths[1] && <StyledTd>{lengths[1]}</StyledTd>}
                        {thermalResistances[1] && (
                          <StyledTd>{thermalResistances[1]}</StyledTd>
                        )}
                        {densities[1] && <StyledTd>{densities[1]}</StyledTd>}
                      </tr>
                    ) : null}
                    {(items && items.length > 0 && items[2]) ||
                    (borders && borders.length > 0 && borders[2]) ||
                    (colors && colors.length > 0 && colors[2]) ||
                    (dimensions && dimensions.length > 0 && dimensions[2]) ||
                    (lengths && lengths.length > 0 && lengths[2]) ||
                    (thermalResistances &&
                      thermalResistances.length > 0 &&
                      thermalResistances[2]) ||
                    (densities && densities.length > 0 && densities[2]) ? (
                      <tr>
                        {items[2] && <StyledTd>{items[2]}</StyledTd>}
                        {borders[2] && <StyledTd>{borders[2]}</StyledTd>}
                        {colors[2] && <StyledTd>{colors[2]}</StyledTd>}
                        {dimensions[2] && <StyledTd>{dimensions[2]}</StyledTd>}
                        {lengths[2] && <StyledTd>{lengths[2]}</StyledTd>}
                        {thermalResistances[2] && (
                          <StyledTd>{thermalResistances[2]}</StyledTd>
                        )}
                        {densities[2] && <StyledTd>{densities[2]}</StyledTd>}
                      </tr>
                    ) : null}
                    {(items && items.length > 0 && items[3]) ||
                    (borders && borders.length > 0 && borders[3]) ||
                    (colors && colors.length > 0 && colors[3]) ||
                    (dimensions && dimensions.length > 0 && dimensions[3]) ||
                    (lengths && lengths.length > 0 && lengths[3]) ||
                    (thermalResistances &&
                      thermalResistances.length > 0 &&
                      thermalResistances[3]) ||
                    (densities && densities.length > 0 && densities[3]) ? (
                      <tr>
                        {items[3] && <StyledTd>{items[3]}</StyledTd>}
                        {borders[3] && <StyledTd>{borders[3]}</StyledTd>}
                        {colors[3] && <StyledTd>{colors[3]}</StyledTd>}
                        {dimensions[3] && <StyledTd>{dimensions[3]}</StyledTd>}
                        {lengths[3] && <StyledTd>{lengths[3]}</StyledTd>}
                        {thermalResistances[3] && (
                          <StyledTd>{thermalResistances[3]}</StyledTd>
                        )}
                        {densities[3] && <StyledTd>{densities[3]}</StyledTd>}
                      </tr>
                    ) : null}
                    {(items && items.length > 0 && items[4]) ||
                    (borders && borders.length > 0 && borders[4]) ||
                    (colors && colors.length > 0 && colors[4]) ||
                    (dimensions && dimensions.length > 0 && dimensions[4]) ||
                    (lengths && lengths.length > 0 && lengths[4]) ||
                    (thermalResistances &&
                      thermalResistances.length > 0 &&
                      thermalResistances[4]) ||
                    (densities && densities.length > 0 && densities[4]) ? (
                      <tr>
                        {items[4] && <StyledTd>{items[4]}</StyledTd>}
                        {borders[4] && <StyledTd>{borders[4]}</StyledTd>}
                        {colors[4] && <StyledTd>{colors[4]}</StyledTd>}
                        {dimensions[4] && <StyledTd>{dimensions[4]}</StyledTd>}
                        {lengths[4] && <StyledTd>{lengths[4]}</StyledTd>}
                        {thermalResistances[4] && (
                          <StyledTd>{thermalResistances[4]}</StyledTd>
                        )}
                        {densities[4] && <StyledTd>{densities[4]}</StyledTd>}
                      </tr>
                    ) : null}
                    {(items && items.length > 0 && items[5]) ||
                    (borders && borders.length > 0 && borders[5]) ||
                    (colors && colors.length > 0 && colors[5]) ||
                    (dimensions && dimensions.length > 0 && dimensions[5]) ||
                    (lengths && lengths.length > 0 && lengths[5]) ||
                    (thermalResistances &&
                      thermalResistances.length > 0 &&
                      thermalResistances[5]) ||
                    (densities && densities.length > 0 && densities[5]) ? (
                      <tr>
                        {items[5] && <StyledTd>{items[5]}</StyledTd>}
                        {borders[5] && <StyledTd>{borders[5]}</StyledTd>}
                        {colors[5] && <StyledTd>{colors[5]}</StyledTd>}
                        {dimensions[5] && <StyledTd>{dimensions[5]}</StyledTd>}
                        {lengths[5] && <StyledTd>{lengths[5]}</StyledTd>}
                        {thermalResistances[5] && (
                          <StyledTd>{thermalResistances[5]}</StyledTd>
                        )}
                        {densities[5] && <StyledTd>{densities[5]}</StyledTd>}
                      </tr>
                    ) : null}
                  </tbody>
                </StyledTable>
              </TableContainer>
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
        borders
        colors
        densities
        dimensions
        lengths
        thermalResistances
        items
      }
      description
    }
  }
`

export default ProductTemplate
