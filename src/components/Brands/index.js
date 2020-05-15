import React from "react"
import * as Grid from "../Grid"
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

const firstGroup = [
  {
    alt: "sika",
    src:"https://i.imgur.com/wXdZCyx.png"
  },
  {
    alt:"fiberglass",
    src:"https://i.imgur.com/HGIcVsh.png"
  },
  {
    alt:"gyplac",
    src:"https://i.imgur.com/p6fMMHj.png"
  },
  {
    alt:"panelrey",
    src:"https://i.imgur.com/fDiA9ba.jpg"
  }
]

const secondGroup = [
  {
    alt: "romeral",
    src:"https://i.imgur.com/KJiSq7H.jpg"
  },
  {
    alt:"sylvania",
    src:"https://i.imgur.com/Kx4laVb.jpg"
  },
  {
    alt:"intaco",
    src:"https://i.imgur.com/JkCfrYH.jpg"
  },
  {
    alt:"usg",
    src:"https://i.imgur.com/0a4IsEe.png"
  }
]

function Brands() {
  
  return (
    <Grid.Container>
      <Grid.Row>
        <Grid.Column>
          <h3 style={{ textAlign: "center" }}>Nuestras Marcas</h3>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        {
          firstGroup && firstGroup.map(({alt, src}) => {
            return(
              <Grid.Column md={3} xs={6} key={alt}>
                <ImageContainer>
                  <Image src={src} alt={alt} width={100}></Image>
                </ImageContainer>
              </Grid.Column>
            )
           
          })
        }
      </Grid.Row>
      <Grid.Row>
      {
          secondGroup && secondGroup.map(({alt, src}) => {
            return(
              <Grid.Column md={3} xs={6} key={alt}>
                <ImageContainer>
                  <Image src={src} alt={alt} width={100}></Image>
                </ImageContainer>
              </Grid.Column>
            )
           
          })
        }
      </Grid.Row>
    </Grid.Container>
  )
}

export default Brands
