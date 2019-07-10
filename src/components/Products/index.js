import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useMobileContext } from "../../context"

import * as Grid from "../Grid"
import Item from "./Item"
import ItemResponsive from "./ItemResponsive"

import { ItemContainerResponsive } from "./styles"

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
          }
        }
      }
    `
  )

  const { isMobile } = useMobileContext()

  return (
    <Grid.Container>
      <Grid.Row>
        <Grid.Column>
          <h3>Todos los productos</h3>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        {isMobile ? (
          <Grid.Column>
            <ItemContainerResponsive>
              {products.map(({ name, slug, image }) => (
                <ItemResponsive
                  key={name}
                  name={name}
                  image={image}
                  slug={slug}
                />
              ))}
            </ItemContainerResponsive>
          </Grid.Column>
        ) : (
          products.map(({ name, slug, image }) => (
            <Grid.Column key={name} md={3}>
              <Item name={name} image={image} slug={slug}></Item>
            </Grid.Column>
          ))
        )}
      </Grid.Row>
    </Grid.Container>
  )
}

export default Products
