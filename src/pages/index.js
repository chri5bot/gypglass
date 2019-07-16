import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import SliderProduct from "../components/SliderProduct"

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <SliderProduct></SliderProduct>
  </Layout>
)

export default IndexPage
