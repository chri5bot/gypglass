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
        <Grid.Column>
          <h3>Todos los productos</h3>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <ItemContainerResponsive>
            {products.map(product => (
              <ItemResponsive key={product.slug} {...product} />
            ))}
          </ItemContainerResponsive>
        </Grid.Column>
      </Grid.Row>
      <ItemContainer>
        <Grid.Row>
          {products.map(product => (
            <Grid.Column key={product.slug} md={3}>
              <Item {...product}></Item>
            </Grid.Column>
          ))}
        </Grid.Row>
      </ItemContainer>
    </Grid.Container>
  )
}

export default Products
