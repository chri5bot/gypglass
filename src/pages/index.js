import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Carousel from "../components/Carousel"
import * as Grid from "../components/Grid"
import media from "../styles/media"
import styled from "styled-components"
// import banner1 from "../assets/banner/banner-1.png"
// import banner2 from "../assets/banner/banner-2.png"
import Brands from "../components/Brands"
import { IoLogoWhatsapp } from "react-icons/io"
import { Link } from "gatsby"
import perfileria from "../assets/category/PERFILERIA.jpg"
import compuestos from "../assets/category/COMPUESTOS.jpg"
import gypsum from "../assets/category/GYPSUM.jpg"
import lana from "../assets/category/LANA.jpg"
import moduladas from "../assets/category/MODULADAS.jpg"
import servicios from "../assets/servicios.jpg"

export const ImgContainer = styled.div`
  background-image: url('${props => props.img}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 190px;
  margin: 1rem 0;
  ${media.sm`
    height: 380px;
  `};
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  ${media.sm`
    display: flex;
    align-items: center;
    height: 100%;
    width: 50%;
    padding-left: 100px;
  `};
`

export const Text = styled.span`
  color: white;
  ${media.sm`
    font-size: 25px;  
  `};
`

export const WhatsappContainer = styled.div`
  position: fixed;
  z-index: 16000160;
  bottom: 0;
  text-align: center;
  overflow: hidden;
  right: 0;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`

export const Title = styled.h1`
  font-size: 1em;
  ${media.sm`
    font-size: 2em;  
  `};
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Inicio" />
      <WhatsappContainer>
        <a
          href="https://api.whatsapp.com/send?phone=593995271399&text=&source=&data="
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoWhatsapp
            style={{ color: "#D3A200", width: "60px", height: "60px" }}
          ></IoLogoWhatsapp>
        </a>
      </WhatsappContainer>
      <Grid.Container>
        <Grid.Row>
          <Grid.Column>
            <Carousel></Carousel>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column md={12}>
            <img
              src={servicios}
              alt="slider-1"
              style={{ width: "100%", margin: "1rem 0" }}
            ></img>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column md={12}>
            <h3 style={{ textAlign: "center" }}>Nuestros Productos</h3>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column md={12}>
            <Link
              to="/catalog"
              state={{ category: { value: "perfileria", label: "Perfilería" } }}
            >
              <ImgContainer img={perfileria} alt="slider-1">
                <Wrapper>
                  <Title>Perfilería</Title>
                </Wrapper>
              </ImgContainer>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column md={6}>
            <Link
              to="/catalog"
              state={{
                category: {
                  value: "gypsum-y-fibrocemento",
                  label: "Gypsum y Fibrocemento",
                },
              }}
            >
              <ImgContainer img={gypsum} alt="slider-1">
                <Wrapper>
                  <Title>Gypsum y Fibrocemento</Title>
                </Wrapper>
              </ImgContainer>
            </Link>
          </Grid.Column>
          <Grid.Column md={6}>
            <Link
              to="/catalog"
              state={{
                category: {
                  value: "moduladas-cielo-raso",
                  label: "Láminas Moduladas Cielo Raso",
                },
              }}
            >
              <ImgContainer img={moduladas} alt="slider-1">
                <Wrapper>
                  <Title>Láminas Moduladas Cielo Raso</Title>
                </Wrapper>
              </ImgContainer>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column md={6}>
            <Link
              to="/catalog"
              state={{
                category: { value: "lana-de-vidrio", label: "Lana de Vidrio" },
              }}
            >
              <ImgContainer img={lana} alt="slider-1">
                <Wrapper>
                  <Title>Lana de Vidrio</Title>
                </Wrapper>
              </ImgContainer>
            </Link>
          </Grid.Column>
          <Grid.Column md={6}>
            <Link
              to="/catalog"
              state={{
                category: {
                  value: "compuestos-y-accesorios",
                  label: "Compuestos y Accesorios",
                },
              }}
            >
              <ImgContainer img={compuestos} alt="slider-1">
                <Wrapper>
                  <Title>Compuestos y Accesorios</Title>
                </Wrapper>
              </ImgContainer>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid.Container>

      <Brands />
    </Layout>
  )
}

export default IndexPage
