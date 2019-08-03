import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as Grid from "../Grid"
import Item from "./Item"
import ItemResponsive from "./ItemResponsive"

import {
  ItemContainerResponsive,
  ItemContainer,
  StyledSelect,
  HeadContainer,
} from "./styles"

function Products() {
  const {
    allProductsJson: { nodes: products },
  } = useStaticQuery(
    graphql`
      query {
        allProductsJson {
          nodes {
            name
            slug
            image
            description
            category
          }
        }
      }
    `
  )

  return (
    <Grid.Container>
      <HeadContainer>
        <Grid.Row>
          <Grid.Column md={6}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h3>Nuestros productos</h3>
            </div>
          </Grid.Column>
          <Grid.Column md={6}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                height: "100%",
              }}
            >
              <StyledSelect placeholder="Categoría"></StyledSelect>
            </div>
          </Grid.Column>
        </Grid.Row>
      </HeadContainer>

      <ItemContainerResponsive>
        {products.map(product => (
          <ItemResponsive key={product.slug} {...product} />
        ))}
      </ItemContainerResponsive>
      <ItemContainer>
        {products.map(product => (
          <Item key={product.slug} {...product}></Item>
        ))}
      </ItemContainer>
    </Grid.Container>
  )
}

export default Products
