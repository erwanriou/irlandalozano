import styled from "styled-components"
import { colors, sizes } from "@styles/constants"

export const ClientStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(25% - 1px);
  border-right: 1px solid ${colors.black2};
  border-bottom: 1px solid ${colors.black2};
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    transition: all 0.5s ease;
  }
  i {
    position: absolute;
    color: ${colors.white};
    font-size: ${sizes.xLarge};
  }
`

export const ClientPreview = styled.video`
  width: 100%;
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
  }
  video {
    max-width: 1200px;
    box-shadow: rgb(0 0 0 / 20%) 1px 1px 3px 0;
  }
  i {
    position: absolute;
    z-index: 4;
    font-size: ${sizes.large};
    right: 16px;
    top: 16px;
  }
`
