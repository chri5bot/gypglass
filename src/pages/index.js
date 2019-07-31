import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Carousel from "../components/Carousel"
import * as Grid from "../components/Grid"
import media from "../styles/media"
import styled from "styled-components"
import banner1 from "../assets/banner/banner-1.png"
import banner2 from "../assets/banner/banner-2.png"
import { IoLogoWhatsapp } from "react-icons/io"
// import Products from "../components/Products"

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
  display: none;
  ${media.sm`
    display: flex;
    height: 100%;
    align-items: center;
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
`

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <WhatsappContainer>
      <a
        href="https://api.whatsapp.com/send?phone=593995271399&text=&source=&data="
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoWhatsapp
          style={{ color: "#D3A200", width: "50px", height: "50px" }}
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
        <Grid.Column md={6}>
          <ImgContainer img={banner1} alt="slider-1">
            <Wrapper>
              <Text>Banner Here</Text>
            </Wrapper>
          </ImgContainer>
        </Grid.Column>
        <Grid.Column md={6}>
          <ImgContainer img={banner2} alt="slider-2">
            <Wrapper>
              <Text>Banner Here</Text>
            </Wrapper>
          </ImgContainer>
        </Grid.Column>
      </Grid.Row>
    </Grid.Container>
    {/* <Products /> */}
  </Layout>
)

export default IndexPage
