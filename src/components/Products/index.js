import React from "react"
import * as Grid from "../Grid"
import { useStaticQuery, graphql } from "gatsby"

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
          <Grid.Column key={name} md={3}>
            {name}
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid.Container>
  )
}

export default Products
