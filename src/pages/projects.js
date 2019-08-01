import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Projects from "../components/Projects"

function ProjectsPage() {
  return (
    <Layout>
      <SEO title="Catálogo" />
      <Projects />
    </Layout>
  )
}

export default ProjectsPage
