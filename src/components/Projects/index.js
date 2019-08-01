import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as Grid from "../Grid"
import { ItemContainerResponsive, ItemContainer } from "./styles"
import Item from "./Item"
import ItemResponsive from "./ItemResponsive"

function Projects() {
  const {
    allProjectsJson: { nodes: projects },
  } = useStaticQuery(
    graphql`
      query {
        allProjectsJson {
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
        <Grid.Column md={12}>
          <h3 style={{ textAlign: "center" }}>Nuestros Proyectos</h3>
        </Grid.Column>
      </Grid.Row>
      <ItemContainerResponsive>
        {projects.map(project => (
          <ItemResponsive key={project.slug} {...project} />
        ))}
      </ItemContainerResponsive>
      <ItemContainer>
        {projects.map(project => (
          <Item key={project.slug} {...project}></Item>
        ))}
      </ItemContainer>
    </Grid.Container>
  )
}

export default Projects
