import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const ProductPage = ({
  data: {
    productsJson: { name, brand, image, technicalInformation, description },
  },
}) => (
  <Layout>
    <SEO title={name} />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export const query = graphql`
  query ProductsQuery($slug: String!) {
    productsJson(slug: { eq: $slug }) {
      name
      slug
      brand
      image
      technicalInformation
      description
    }
  }
`

export default ProductPage
