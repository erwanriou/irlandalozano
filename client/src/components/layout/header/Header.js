import React from "react"

// REDUX
import { useSelector } from "react-redux"
import { getTranslate } from "r1-localize"

// IMPORT STYLING
import { HeaderWrapper, HeaderContainer, HeaderNav, HeaderLink } from "./Header.styles"

// IMPORT COMPONENTS
import Logo from "@components/elements/logo/Logo"

// IMPORT DATA
import { links } from "@data/links"

const Header = () => {
  // HOOKS
  const translate = useSelector(state => getTranslate(state.localize))

  // RENDER FUNCTIONS
  const renderLinks = () => links.map((link, i) => <HeaderLink href={link.href}>{translate(`header.nav.${i + 1}`)}</HeaderLink>)

  // MAIN RENDER
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo />
        <HeaderNav>{renderLinks()}</HeaderNav>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
