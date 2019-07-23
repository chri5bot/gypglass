import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import * as Grid from "../components/Grid"
import sizes from "../styles/media"
import {
  MdAccessibility,
  MdDone,
  MdAirplanemodeActive,
  MdComputer,
} from "react-icons/md"

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
            <MdAccessibility
              style={{ width: "50px", height: "50px" }}
            ></MdAccessibility>
            <h3>Nuestros Servicios 1</h3>
          </InfoContainer>
        </Grid.Column>
        <Grid.Column md={3}>
          <InfoContainer>
            <MdDone style={{ width: "50px", height: "50px" }}></MdDone>
            <h3>Nuestros Servicios 2</h3>
          </InfoContainer>
        </Grid.Column>
        <Grid.Column md={3}>
          <InfoContainer>
            <MdAirplanemodeActive
              style={{ width: "50px", height: "50px" }}
            ></MdAirplanemodeActive>
            <h3>Nuestros Servicios 3</h3>
          </InfoContainer>
        </Grid.Column>
        <Grid.Column md={3}>
          <InfoContainer>
            <MdComputer style={{ width: "50px", height: "50px" }}></MdComputer>
            <h3>Nuestros Servicios 4</h3>
          </InfoContainer>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column md={3}>
          <Title>NOSOTROS</Title>
        </Grid.Column>
        <Grid.Column md={9}>
          <Paragraph>
            Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In
            malesuada enim in dolor euismod, id commodo mi consectetur.
            Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris
            turpis nisl, molestie ut ipsum et, suscipit vehicula odio.
            Vestibulum interdum vestibulum felis ac molestie. Praesent aliquet
            quam et libero dictum, vitae dignissim leo eleifend. In in turpis
            turpis. Quisque justo turpis, ves.
          </Paragraph>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column md={3}>
          <Title>HISTORIA</Title>
        </Grid.Column>
        <Grid.Column md={9}>
          <Paragraph>
            Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In
            malesuada enim in dolor euismod, id commodo mi consectetur.
            Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris
            turpis nisl, molestie ut ipsum et, suscipit vehicula odio.
            Vestibulum interdum vestibulum felis ac molestie. Praesent aliquet
            quam et libero dictum, vitae dignissim leo eleifend. In in turpis
            turpis. Quisque justo turpis, ves.
          </Paragraph>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column md={3}>
          <Title>MISIÓN</Title>
        </Grid.Column>
        <Grid.Column md={9}>
          <Paragraph>
            Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In
            malesuada enim in dolor euismod, id commodo mi consectetur.
            Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris
            turpis nisl, molestie ut ipsum et, suscipit vehicula odio.
            Vestibulum interdum vestibulum felis ac molestie. Praesent aliquet
            quam et libero dictum, vitae dignissim leo eleifend. In in turpis
            turpis. Quisque justo turpis, ves.
          </Paragraph>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column md={3}>
          <Title>VISIÓN</Title>
        </Grid.Column>
        <Grid.Column md={9}>
          <Paragraph>
            Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In
            malesuada enim in dolor euismod, id commodo mi consectetur.
            Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris
            turpis nisl, molestie ut ipsum et, suscipit vehicula odio.
            Vestibulum interdum vestibulum felis ac molestie. Praesent aliquet
            quam et libero dictum, vitae dignissim leo eleifend. In in turpis
            turpis. Quisque justo turpis, ves.
          </Paragraph>
        </Grid.Column>
      </Grid.Row>
    </Grid.Container>
  </Layout>
)

export default AboutUsPage
