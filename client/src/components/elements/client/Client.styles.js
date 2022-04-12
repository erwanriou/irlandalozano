import styled from "styled-components"
import { colors, sizes } from "@styles/constants"

export const ClientStyle = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(25% - 1px);
  border-right: 1px solid ${colors.black2};
  border-bottom: 1px solid ${colors.black2};
  overflow: hidden;
  max-height: 200px;
  img {
    height: 100%;
    transition: all 0.5s ease;
  }
  i {
    position: absolute;
    color: ${colors.white};
    font-size: ${sizes.xLarge};
  }
  @media only screen and (max-width: 600px) {
    width: calc(50% - 1px);
  }
`

export const ClientPreview = styled.video`
  height: 100%;
  transition: all 0.5s ease;
  cursor: pointer;
`

export const ClientModal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.whiteTransparent1};
  div {
    position: relative;
    overflow: hidden;
  }
  video {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    max-height: 600px;
    box-shadow: rgb(0 0 0 / 20%) 1px 1px 3px 0;
  }
  i {
    position: absolute;
    z-index: 4;
    font-size: ${sizes.large};
    right: 16px;
    top: 16px;
  }
  @media only screen and (max-width: 1000px) {
    video {
      max-width: 100%;
      max-height: auto;
    }
  }
`
