import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as Grid from "../Grid"
import Item from "./Item"

function Products() {
  const {
    allProductsJson: { nodes: products },
  } = useStaticQuery(
    graphql`
      query {
        allProductsJson {
          nodes {
            name
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
        {products.map(({ name }) => (
          <Grid.Column key={name} md={6} xs={6} lg={3}>
            <Item name={name}></Item>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid.Container>
  )
}

export default Products
