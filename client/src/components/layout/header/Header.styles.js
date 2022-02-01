import styled from "styled-components"
import { colors, sizes } from "@styles/constants"

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  background-color: ${colors.black};
  border-bottom: 1px solid ${colors.black2};
  @media only screen and (max-width: 750px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 50px;
    width: calc(100% - 30px);
    &:first-of-type {
      padding: 0 15px;
    }
    & svg {
      height: 30px;
    }
  }
  @media only screen and (max-width: 450px) {
    top: unset;
    bottom: 0;
  }
`
export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  height: 70px;
  margin: 0 auto;
`
export const HeaderNav = styled.nav`
  position: relative;
  display: flex;
`

export const HeaderLogo = styled.a`
  position: absolute;
  cursor: pointer;

  left: 0;
  & svg {
    height: 60px;
  }
`

export const HeaderLink = styled.a`
  position: relative;
  cursor: pointer;
  color: ${colors.white};
  text-decoration: none;
  margin-right: 30px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: ${sizes.small};
  transition: color 0.3s ease;
  &:hover {
    color: ${colors.green};
  }
`

export const HeaderLanguages = styled.div`
  position: absolute;
  right: 50px;
  color: ${colors.white};
  font-size: ${sizes.small};
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  & span:hover {
    cursor: pointer;
    color: ${colors.green};
  }
`
export const HeaderSpan = styled.span`
  color: ${p => (p.active ? colors.white : "#aaa")};

  &:first-child:after {
    content: " | ";
  }
`

// MOBILE STYLING
export const HeaderMenu = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  z-index: 3;
  top: 0;
  visibility: ${p => (p.toggle ? "visible" : "hidden")};
  right: ${p => (p.toggle ? 0 : "-220px")};
  width: 220px;
  height: 100%;
  background-color: ${colors.darkGrey};
  transition: all 0.3s ease;
  nav {
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    a {
      margin-right: 15px;
      margin-top: 30px;
    }
  }
  button {
    margin-top: 30px;
    margin-right: 15px;
    margin-bottom: 100px;
    width: 100px;
  }
  i {
    position: absolute;
    right: 15px;
    bottom: 15px;
  }
  div {
    position: absolute;
    right: 15px;
    bottom: 65px;
  }
`
