import styled from "styled-components"
import media from "../../styles/media"

export const ContainerFluid = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
`

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`

export const Column = styled.div`
  ${props => {
    let styles = `
      padding-right: 15px;
      padding-left: 15px;
      position: relative;
      width: 100%;
      min-height: 1px;
    `

    if (typeof props.xs == "number") {
      const maxWidth = (props.xs / 12) * 100

      const generalStyles = `
        ${
          maxWidth === 0
            ? "display: none;"
            : `flex: 0 0 ${maxWidth}%;
        max-width: ${maxWidth}%;`
        }
      `

      styles += generalStyles
    }

    if (typeof props.sm == "number") {
      const maxWidth = (props.sm / 12) * 100

      const generalStyles = `
        
        ${
          maxWidth === 0
            ? "display: none;"
            : `flex: 0 0 ${maxWidth}%;
        max-width: ${maxWidth}%;`
        }
      `

      styles += `
      @media ${media.sm} {
          ${generalStyles}
        }
      `
    }

    if (typeof props.md == "number") {
      const maxWidth = (props.md / 12) * 100

      const generalStyles = `
        
        ${
          maxWidth === 0
            ? "display: none;"
            : `flex: 0 0 ${maxWidth}%;
        max-width: ${maxWidth}%;`
        }
      `

      styles += `
      @media ${media.md} {
          ${generalStyles}
        }
      `
    }

    if (typeof props.lg == "number") {
      const maxWidth = (props.lg / 12) * 100

      const generalStyles = `
        
        ${
          maxWidth === 0
            ? "display: none;"
            : `flex: 0 0 ${maxWidth}%;
        max-width: ${maxWidth}%;`
        }
      `

      styles += `
      @media ${media.lg} {
          ${generalStyles}
        }
      `
    }

    return styles
  }};
`
