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
`
