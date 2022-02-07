import styled from "styled-components"
import { colors, sizes } from "@styles/constants"

export const FooterStyle = styled.footer`
  position: relative;
  max-width: 1200px;
  margin: 100px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    font-family: "Montserrat", sans-serif;
    text-align: center;
    font-size: ${sizes.micro};
    line-height: 2;
    font-weight: 300;
    padding: 0 20px;
  }
`
