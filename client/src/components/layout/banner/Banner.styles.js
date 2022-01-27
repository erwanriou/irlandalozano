import styled from "styled-components"
import { colors, sizes } from "@styles/contants"

export const BannerWrapper = styled.section`
  position: relative;
  background-color: ${colors.black};
  width: 100%;
  max-height: 750px;
  overflow: hidden;
  video {
    position: relative;
    width: 100%;
  }
  @media only screen and (max-width: 1000px) {
    margin-top: 70px;
  }
  @media only screen and (max-width: 750px) {
    margin-top: 50px;
  }
  @media only screen and (max-width: 450px) {
    margin-top: 0;
  }
`
