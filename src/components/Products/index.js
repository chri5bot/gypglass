import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as Grid from "../Grid"
import Item from "./Item"
import ItemResponsive from "./ItemResponsive"

import { ItemContainerResponsive, ItemContainer } from "./styles"

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
          }
        }
      }
    `
  )

  return (
    <Grid.Container>
      <Grid.Row>
        <Grid.Column md={12}>
          <h3 style={{ textAlign: "center" }}>Nuestros productos</h3>
        </Grid.Column>
      </Grid.Row>

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
