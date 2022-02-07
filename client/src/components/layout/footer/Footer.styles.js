import styled from "styled-components"
import { colors, sizes } from "@styles/constants"

export const FooterStyle = styled.footer`
  position: relative;
  max-width: 1200px;
  margin: 20px auto;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    text-align: center;
    font-size: ${sizes.micro};
    font-weight: 300;
  }
`
