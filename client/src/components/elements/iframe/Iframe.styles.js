import styled from "styled-components"
import { colors, sizes } from "@styles/constants"

export const IframeStyle = styled.div`
  position: relative;
  min-height: 687px;
  overflow: hidden;
  max-width: 1200px;
  margin: 100px auto;
  padding-bottom: 100px;
  position: relative;
  background-color: ${colors.black};
  height: 0;
  iframe {
    left: 0;
    top: 0;
    width: 100%;
    position: absolute;
  }
  @media only screen and (max-width: 450px) {
    min-height: 300px;
    margin: 0 auto;
    padding-bottom: 0;

    iframe {
      height: 100%;
    }
  }
`
