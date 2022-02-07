import styled from "styled-components"
import { colors, sizes } from "@styles/constants"

export const IframeStyle = styled.div`
  position: relative;
  min-height: 687px;
  overflow: hidden;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  height: 0;
  iframe {
    left: 0;
    top: 0;
    width: 100%;
    position: absolute;
  }
  @media only screen and (max-width: 450px) {
    min-height: 300px;
    iframe {
      height: 100%;
    }
  }
`
