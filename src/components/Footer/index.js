import React from "react"
import * as Grid from "../Grid"
import styled from "styled-components"
import sizes from "../../styles/media"
import { Link } from "gatsby"

const GypglassTitle = styled.h5`
  width: 100%;
  margin: 1rem 0;
  ${sizes.md`
    width: 350px;
  `};
`

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  font-size: small;
`

function Footer() {
  return (
    <Grid.Container>
      <Grid.Row>
        <Grid.Column md={4}>
          <GypglassTitle>Gypglass</GypglassTitle>
          <p style={{ textAlign: "justify", fontSize: "small" }}>
            Gypglass es una empresa de instalación de gypsum y cielos rasos con los mejores costos, de la mano de profesionales que garantizan su trabajo.
          </p>
        </Grid.Column>
        <Grid.Column md={4}>
          <GypglassTitle>Contáctenos</GypglassTitle>

          <p style={{ textAlign: "justify", fontSize: "small" }}>
            Dirección: Quito, Bartolome Sánchez y Sebastian Moreno N71-68.
          </p>
          <p style={{ textAlign: "justify", fontSize: "small" }}>
            Teléfonos: 025134019 - 0995654537
          </p>
        </Grid.Column>
        <Grid.Column md={4}>
          <GypglassTitle>Secciones</GypglassTitle>
          <StyledUl>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about-us">Nosotros</Link>
            </li>
            <li>
              <Link to="/catalog">Catálogo</Link>
            </li>
            <li>
              <Link to="/contact-us">Contáctanos</Link>
            </li>
          </StyledUl>
        </Grid.Column>
      </Grid.Row>
    </Grid.Container>
  )
}

export default Footer
