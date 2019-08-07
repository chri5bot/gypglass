import React from "react"
import * as Grid from "../Grid"
import styled from "styled-components"
import {
  IoLogoFacebook,
  // IoLogoInstagram
} from "react-icons/io"

const Copyright = styled.h6`
  padding: 0;
  margin: 0;
  color: #aaa;
`

const CopyrightContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

const SocialNetwork = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #aaa;
`

function Footer() {
  return (
    <Grid.Container>
      <Grid.Row>
        <Grid.Column xs={6}>
          <CopyrightContainer>
            <Copyright>
              © Copyright {new Date().getFullYear()} Gypglass
            </Copyright>
          </CopyrightContainer>
        </Grid.Column>
        <Grid.Column xs={6}>
          <SocialNetwork>
            <a
              target="_blank"
              href="https://www.facebook.com/gypglass.1/"
              rel="noopener noreferrer"
            >
              <IoLogoFacebook style={{ margin: "0 0.25rem" }}></IoLogoFacebook>
            </a>

            {/* <IoLogoInstagram></IoLogoInstagram> */}
          </SocialNetwork>
        </Grid.Column>
      </Grid.Row>
    </Grid.Container>
  )
}

export default Footer
