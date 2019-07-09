import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as Grid from "../Grid"

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
        {products.map(({ name }) => (
          <Grid.Column key={name} md={6} xs={6} lg={3}>
            {name}
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid.Container>
  )
}

export default Products
