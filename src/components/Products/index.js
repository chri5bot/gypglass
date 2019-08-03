import React, { useState } from "react"
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

const options = [
  { value: null, label: "Todas" },
  { value: "perfileria", label: "Perfilería" },
  { value: "gypsum-y-fibrocemento", label: "Gypsum y Fibrocemento" },
  { value: "moduladas-cielo-raso", label: "Láminas Moduladas Cielo Raso" },
  { value: "lana-de-vidrio", label: "Lana de Vidrio" },
  {
    value: "compuestos-y-accesorios",
    label: "Compuestos y Accesorios",
  },
]

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

  const [selectedCategory, setSelectedCategory] = useState(null)

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
              <StyledSelect
                placeholder="Categoría"
                options={options}
                value={selectedCategory}
                onChange={value => setSelectedCategory(value)}
              ></StyledSelect>
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
