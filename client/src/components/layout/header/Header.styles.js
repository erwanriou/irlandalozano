import styled from "styled-components"
import { colors, sizes } from "@styles/contants"

export const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  background-color: ${colors.black};
`
export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  height: 90px;
  margin: 0 auto;
  & img:first-child {
    margin-right: 50px;
  }
`
export const HeaderNav = styled.nav`
  position: relative;
  display: flex;
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
