import styled from "styled-components"
import { colors, sizes } from "@styles/constants"

export const ProjectStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(25% - 2 * ${sizes.medium});
  min-height: 150px;
  padding: ${sizes.medium};
  cursor: pointer;
  i {
    position: relative;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h3 {
    position: relative;
    top: 0;
    visibility: visible;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${sizes.medium} 0;
    font-size: ${sizes.medium};
    text-align: center;
    line-height: 1.5;
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    transition: all 0.5s ease;
  }
  p {
    position: absolute;
    top: 0;
    display: flex;
    visibility: hidden;
    opacity: 0;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: ${sizes.small};
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    line-height: 1.5;
    font-weight: 300;
    transition: all 0.5s ease;
  }
  &:hover p {
    visibility: visible;
    opacity: 1;
    top: 50px;
  }
  &:hover h3 {
    visibility: hidden;
    opacity: 0;
    top: 100px;
  }
  @media only screen and (max-width: 750px) {
    width: calc(50% - 2 * ${sizes.medium});
    h3 {
      visibility: visible;
      opacity: 1;
    }
    p {
      position: relative;
      visibility: visible;
      opacity: 1;
    }
    &:hover h3 {
      visibility: visible;
      opacity: 1;
      top: unset;
    }
    &:hover p {
      top: unset;
    }
  }
  @media only screen and (max-width: 450px) {
    width: 100%;
  }
`
