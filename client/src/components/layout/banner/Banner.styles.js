import styled from "styled-components"
import { colors, sizes } from "@styles/constants"

export const BannerWrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: ${colors.black};
  width: 100%;
  min-height: 500px;
  overflow: hidden;
  svg {
    position: relative;
    width: 25%;
  }
  @media only screen and (max-width: 1000px) {
    min-height: 300px;
    margin-top: 25px;
  }
  @media only screen and (max-width: 750px) {
    min-height: 200px;
    margin-top: 50px;
  }
  @media only screen and (max-width: 450px) {
    margin-top: 0;
    svg {
      position: relative;
      width: 50%;
    }
  }
`
