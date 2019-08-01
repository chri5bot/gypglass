import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import * as Grid from "../components/Grid"
import sizes from "../styles/media"
import {
  FaDollyFlatbed,
  FaCubes,
  FaRegObjectGroup,
  FaIndustry,
} from "react-icons/fa"

const Title = styled.h4`
  display: flex;
  align-items: center;
  height: 75%;
`

const Paragraph = styled.p`
  margin: 1rem 0;
  text-align: justify;
`

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 2px 4px 0 rgba(137, 137, 137, 0.3);
  padding: 1rem;
  margin: 0.5rem 0;
  ${sizes.md`
    min-height: 250px;
    margin: 2rem 0;
  `};
`

const AboutUsPage = () => (
  <Layout>
    <SEO title="Nosotros" />
    <Grid.Container>
      <Grid.Row>
        <Grid.Column md={3}>
          <InfoContainer>
            <FaDollyFlatbed
              style={{ width: "50px", height: "50px" }}
            ></FaDollyFlatbed>
            <h4 style={{ textAlign: "center" }}>
              Distribución de material para la instalación de gypsum y cielos
              rasos.
            </h4>
          </InfoContainer>
        </Grid.Column>
        <Grid.Column md={3}>
          <InfoContainer>
            <FaCubes style={{ width: "50px", height: "50px" }}></FaCubes>
            <h4 style={{ textAlign: "center" }}>
              Diseño interior, remodelaciones, asesorías de construcción.
            </h4>
          </InfoContainer>
        </Grid.Column>
        <Grid.Column md={3}>
          <InfoContainer>
            <FaRegObjectGroup
              style={{ width: "50px", height: "50px" }}
            ></FaRegObjectGroup>
            <h4 style={{ textAlign: "center" }}>
              Instalación y mantenimiento de gypsum con mano de obra
              especializada.
            </h4>
          </InfoContainer>
        </Grid.Column>
        <Grid.Column md={3}>
          <InfoContainer>
            <FaIndustry style={{ width: "50px", height: "50px" }}></FaIndustry>
            <h4 style={{ textAlign: "center" }}>
              Perfilería con dimensiones personalizadas bajo pedidos.
            </h4>
          </InfoContainer>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column md={3}>
          <Title>NOSOTROS</Title>
        </Grid.Column>
        <Grid.Column md={9}>
          <Paragraph>
            Ahora somos la empresa GYPGLASS; anteriormente FIBERGLASS CIA.LTDA.
            con 40 años de servicio y experiencia en la fabricación distribución
            e instalación de cielos rasos, gypsum y sus componentes.
          </Paragraph>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column md={3}>
          <Title>HISTORIA</Title>
        </Grid.Column>
        <Grid.Column md={9}>
          <Paragraph>
            Contamos con un equipo de instalación altamente capacitado, que de
            la mano de profesionales, se dedican a la realización de las
            diferentes obras. Nuestro afán es tener la oportunidad de atenderles
            de la mejor manera con personal técnico eficiente y material que
            cumpla con las normas de calidad y expectativas del cliente. Además,
            contamos con profesionales en diseño interior que podrán resolver
            cualquiera de sus necesidades, en cuanto asesoría, remodelaciones
            entre otros servicios que esta rama brinda.
          </Paragraph>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column md={3}>
          <Title>MISIÓN</Title>
        </Grid.Column>
        <Grid.Column md={9}>
          <Paragraph>
            Suministrar e instalar materiales para cielos falsos y servicios
            complementarios relacionados con los más altos estándares de
            calidad, con la finalidad de satisfacer las necesidades y
            expectativas de nuestros clientes.
          </Paragraph>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column md={3}>
          <Title>VISIÓN</Title>
        </Grid.Column>
        <Grid.Column md={9}>
          <Paragraph>
            Ser reconocidos como líderes en la fabricación y distribución de
            nuestros productos y servicios, por nuestra excelencia y alta
            tecnología en la producción de los mismos.
          </Paragraph>
        </Grid.Column>
      </Grid.Row>
    </Grid.Container>
  </Layout>
)

export default AboutUsPage
