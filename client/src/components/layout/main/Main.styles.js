import styled from "styled-components"
import { colors, sizes } from "@styles/contants"

export const MainAboutWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  h2 {
    font-family: "Montserrat", sans-serif;
    margin-top: 50px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
    font-size: ${sizes.large};
  }
  p {
    font-family: "Montserrat", sans-serif;
    margin: 30px;
    text-align: center;
    text-transform: uppercase;
    line-height: 1.8;
    font-weight: 300;
  }
`
export const MainServices = styled.div`
  position: relative;
  background-color: ${colors.black};
`
export const MainServicesList = styled.div`
  position: relative;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  border-left: 1px solid ${colors.black2};
`
