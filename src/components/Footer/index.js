import React from "react"
import * as Grid from "../Grid"

function Footer() {
  return (
    <Grid.Container>
      <Grid.Row>
        <Grid.Column>
          © Copyright {new Date().getFullYear()} Gypglass
        </Grid.Column>
      </Grid.Row>
    </Grid.Container>
  )
}

export default Footer
