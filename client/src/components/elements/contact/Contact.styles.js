import styled from "styled-components"
import { colors, sizes } from "@styles/constants"

export const ContactStyle = styled.div`
  position: relative;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  padding: 50px;
  h3 {
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    line-height: 1.5;
    font-size: ${sizes.medium};
    padding-bottom: 15px;
  }
  p {
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    line-height: 1.5;
    font-size: ${sizes.small};
    font-weight: 300;
  }
`

export const ContactIcons = styled.div`
  position: relative;
  display: flex;
  padding: 50px 0;
  i {
    position: relative;
    cursor: pointer;
    padding: 10px;
    margin: 0 10px;
    border-radius: 100%;
    background-color: ${colors.black};
    color: ${colors.white};
    width: 20px;
    height: 20px;
    font-size: 25px;
    &:hover {
      background-color: ${colors.green};
      color: ${colors.black};
      svg {
        fill: ${colors.black};
      }
    }
  }
`
