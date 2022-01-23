import React from "react"

// IMPORT STYLING
import { HeaderWrapper, HeaderContainer, HeaderNav, HeaderLink } from "./Header.styles"

// IMPORT COMPONENTS
import Logo from "@components/elements/logo/Logo"

// IMPORT DATA
import { links } from "@data/links"

const Header = () => {
  // RENDER FUNCTIONS
  const renderLinks = () => links.map(link => <HeaderLink href={link.href}>{link.translation}</HeaderLink>)

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
