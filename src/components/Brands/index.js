import React from "react"
import * as Grid from "../Grid"
import fiberglass from "../../assets/brands/fiberglass.png"
import gyplac from "../../assets/brands/gyplac.png"
import panelrey from "../../assets/brands/panelrey.jpg"
import romeral from "../../assets/brands/romeral.jpg"
import sika from "../../assets/brands/sika.png"
import sylvania from "../../assets/brands/sylvania.jpg"
import styled from "styled-components"
import media from "../../styles/media"

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
const Image = styled.img`
  width: 80px ${media.sm`
    width: 120px
  `};
`

function Brands() {
  return (
    <Grid.Container>
      <Grid.Row>
        <Grid.Column>
          <h3 style={{ textAlign: "center" }}>Nuestras Marcas</h3>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column md={2} xs={4}>
          <ImageContainer>
            <Image src={sika} alt="sika" width={130}></Image>
          </ImageContainer>
        </Grid.Column>
        <Grid.Column md={2} xs={4}>
          <ImageContainer>
            <Image src={fiberglass} alt="fiberglass" width={130}></Image>
          </ImageContainer>
        </Grid.Column>
        <Grid.Column md={2} xs={4}>
          <ImageContainer>
            <Image src={gyplac} alt="gyplac" width={130}></Image>
          </ImageContainer>
        </Grid.Column>
        <Grid.Column md={2} xs={4}>
          <ImageContainer>
            <Image src={panelrey} alt="panelrey" width={130}></Image>
          </ImageContainer>
        </Grid.Column>
        <Grid.Column md={2} xs={4}>
          <ImageContainer>
            <Image src={romeral} alt="romeral" width={130}></Image>
          </ImageContainer>
        </Grid.Column>
        <Grid.Column md={2} xs={4}>
          <ImageContainer>
            <Image src={sylvania} alt="sylvania" width={130}></Image>
          </ImageContainer>
        </Grid.Column>
      </Grid.Row>
    </Grid.Container>
  )
}

export default Brands
