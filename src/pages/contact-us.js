import React, { useState } from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import * as Grid from "../components/Grid"
import contact from "../images/contact.png"
import styled from "styled-components"
import sizes from "../styles/media"
import { Input, TextArea } from "../components/FormElements"
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md"
import GoogleMapReact from "google-map-react"
import logo from "../assets/logo.png"

const ImgContactContainer = styled.div`
  display: none;
  ${sizes.md`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  `};
`

const SendInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SendInput = styled.input`
  text-transform: uppercase;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d3a200;
  color: white;
  padding: 0.7rem 0;
  border-radius: 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  ${sizes.md`
    width: 255px;
  `};
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

const StyledPara = styled.p`
  text-align: center;
`

const AnyReactComponent = () => (
  <img src={logo} width={50} height={50} alt="icon"></img>
)

function ContactUsPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [city, setCity] = useState("")
  const [message, setMessage] = useState("")
  return (
    <Layout>
      <SEO title="Contáctanos" />
      <Grid.Container>
        <Grid.Row>
          <Grid.Column>
            <div style={{ height: "50vh", width: "100%", marginTop: "1rem" }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyC3Oonqo5DQkrS6b3bJNopN3Tl30U_5y_k",
                }}
                defaultCenter={{
                  lng: -78.474966,
                  lat: -0.106533,
                }}
                defaultZoom={18}
                options={{
                  fullscreenControl: false,
                  disableDoubleClickZoom: true,
                  gestureHandling: "cooperative",
                }}
              >
                <AnyReactComponent lng={-78.474966} lat={-0.106533} />
                {/* <span>
                
                </span> */}
              </GoogleMapReact>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid.Container>

      <Grid.Container>
        <Grid.Row>
          <Grid.Column md={4}>
            <InfoContainer>
              <MdLocationOn
                style={{ width: "50px", height: "50px" }}
              ></MdLocationOn>
              <h3>Dirección</h3>
              <StyledPara>
                Bartolome Sánchez y Sebastian Moreno N71-68
              </StyledPara>
            </InfoContainer>
          </Grid.Column>
          <Grid.Column md={4}>
            <InfoContainer>
              <MdPhone style={{ width: "50px", height: "50px" }}></MdPhone>
              <h3>Teléfonos</h3>
              <ul>
                <li>Ventas: 0995654537 - 025134019</li>
                <li>Obras y Diseño: 0995271399</li>
              </ul>
            </InfoContainer>
          </Grid.Column>
          <Grid.Column md={4}>
            <InfoContainer>
              <MdEmail style={{ width: "50px", height: "50px" }}></MdEmail>
              <h3>Correo Electrónico</h3>
              <StyledPara>info.ventas@gypglass.com</StyledPara>
            </InfoContainer>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column md={6}>
            <ImgContactContainer>
              <img src={contact} alt="contact us" />
            </ImgContactContainer>
          </Grid.Column>
          <Grid.Column md={6}>
            <h3>Contáctanos</h3>
            <form
              action="https://formspree.io/info.ventas@gypglass.com"
              method="POST"
              data-netlify="true"
              netlify
            >
              <Input
                id="name"
                label="Nombre o Empresa"
                type="text"
                required
                disabled={false}
                error={false}
                value={name}
                onChange={e => setName(e.target.value)}
              />

              <Input
                id="email"
                label="Correo Electrónico"
                type="text"
                required
                disabled={false}
                error={false}
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Input
                id="phone"
                label="Celular o Teléfono (requerido)"
                type="text"
                required
                disabled={false}
                error={false}
                value={number}
                onChange={e => setNumber(e.target.value)}
              />
              <Input
                id="city"
                label="Ciudad"
                type="text"
                required
                disabled={false}
                error={false}
                value={city}
                onChange={e => setCity(e.target.value)}
              />
              <TextArea
                id="message"
                label="Mensaje"
                type="text"
                required
                disabled={false}
                error={false}
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
              <SendInputContainer>
                <SendInput type="submit" value="Enviar" />
              </SendInputContainer>
            </form>
          </Grid.Column>
        </Grid.Row>
      </Grid.Container>
    </Layout>
  )
}

export default ContactUsPage
