import styled from "styled-components"
import { colors, sizes } from "@styles/contants"

export const ServiceStyle = styled.div`
  position: relative;
  width: calc(50% - 1px);
  border-right: 1px solid ${colors.black2};
  border-bottom: 1px solid ${colors.black2};
  overflow: hidden;
  filter: saturate(0);
  transition: all 0.3s ease;
  img {
    width: 100%;
    height: 100%;
    transition: all 0.5s ease;
  }
  h3 {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    font-size: ${sizes.large};
    text-align: center;
    top: 50%;
    width: 100%;
    z-index: 2;
    text-transform: uppercase;
    color: ${colors.white};
  }
  &:hover {
    filter: saturate(1);
  }
  &:hover img {
    transform: scale(1.5);
  }
  @media only screen and (max-width: 750px) {
    h3 {
      font-size: ${sizes.medium};
    }
  }
  @media only screen and (max-width: 450px) {
    width: 100%;
  }
`
