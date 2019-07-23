import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Carousel from "../components/Carousel"
import * as Grid from "../components/Grid"
import media from "../styles/media"
import styled from "styled-components"
import banner1 from "../assets/banner/banner-1.png"
import banner2 from "../assets/banner/banner-2.png"
import Products from "../components/Products"

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

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
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
    <Products />
  </Layout>
)

export default IndexPage
