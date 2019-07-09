import styled from "styled-components"

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

    if (props.xs) {
      const maxWidth = (props.xs / 12) * 100

      const generalStyles = `
        flex: 0 0 ${maxWidth}%;
        max-width: ${maxWidth}%;
      `

      styles += generalStyles
    }

    if (props.sm) {
      const maxWidth = (props.sm / 12) * 100

      const generalStyles = `
        flex: 0 0 ${maxWidth}%;
        max-width: ${maxWidth}%;
      `

      styles += `
        @media (min-width:576px) {
          ${generalStyles}
        }
      `
    }

    if (props.md) {
      const maxWidth = (props.md / 12) * 100

      const generalStyles = `
        flex: 0 0 ${maxWidth}%;
        max-width: ${maxWidth}%;
      `

      styles += `
        @media (min-width:768px) {
          ${generalStyles}
        }
      `
    }

    if (props.lg) {
      const maxWidth = (props.lg / 12) * 100

      const generalStyles = `
        flex: 0 0 ${maxWidth}%;
        max-width: ${maxWidth}%;
      `

      styles += `
        @media (min-width:992px) {
          ${generalStyles}
        }
      `
    }

    return styles
  }};
`
