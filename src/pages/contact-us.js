import React, { useState } from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import * as Grid from "../components/Grid"
import contact from "../images/contact.png"
import styled from "styled-components"
import sizes from "../styles/media"
import { Input, TextArea } from "../components/FormElements"

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
  background-color: #29b6f6;
  color: white;
  padding: 0.5rem 0;
  border-radius: 20px;
  border: none;
  outline: none;
  ${sizes.md`
    width: 255px;
  `};
`

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
          <Grid.Column md={6}>
            <ImgContactContainer>
              <img src={contact} alt="contact us" />
            </ImgContactContainer>
          </Grid.Column>
          <Grid.Column md={6}>
            <h3>Contáctanos</h3>
            <form action="https://formspree.io/email@domain.tld" method="POST">
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
                label="Email"
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
        <Grid.Row>
          <Grid.Column md={6}>
            <h3>Direccion</h3>
          </Grid.Column>
          <Grid.Column md={6}>
            <h3>123</h3>
          </Grid.Column>
        </Grid.Row>
      </Grid.Container>
    </Layout>
  )
}

export default ContactUsPage
