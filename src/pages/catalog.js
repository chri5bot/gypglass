import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Products from "../components/Products"

function CatalogPage() {
  return (
    <Layout>
      <SEO title="Catálogo" />
      <Products />
    </Layout>
  )
}

export default CatalogPage
