import styled from "styled-components"
import { colors, sizes } from "@styles/contants"

export const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 2;
  width: 100%;
  background-color: ${colors.black};
  border-bottom: 1px solid ${colors.black2};
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
  left: 0;
  & svg:first-child {
    height: 60px;
  }
`

export const HeaderLink = styled.a`
  position: relative;
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
