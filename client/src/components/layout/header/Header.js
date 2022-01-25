import React from "react"

// REDUX
import { useSelector } from "react-redux"
import { getTranslate } from "r1-localize"

// IMPORT STYLING
import { HeaderWrapper, HeaderContainer, HeaderLogo, HeaderNav, HeaderLink, HeaderLanguages, HeaderSpan } from "./Header.styles"

// IMPORT COMPONENTS
import Logo from "@components/elements/logo/Logo"
import Button from "@components/elements/button/Button"

// IMPORT DATA
import { links } from "@data/links"

const Header = ({ languages, setActiveLanguage }) => {
  // HOOKS
  const translate = useSelector(state => getTranslate(state.localize))

  // RENDER FUNCTIONS
  const renderLanguages = () => {
    return languages.map(l => (
      <HeaderSpan key={l.code} active={l.active} onClick={() => setActiveLanguage(l.code)}>
        {l.code.toUpperCase()}
      </HeaderSpan>
    ))
  }

  const renderLinks = () =>
    links.map((link, i) => (
      <HeaderLink key={i} href={link.href}>
        {translate(`header.nav.${i + 1}`)}
      </HeaderLink>
    ))

  // MAIN RENDER
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogo href="/">
          <Logo />
        </HeaderLogo>
        <HeaderNav>{renderLinks()}</HeaderNav>
        <Button text={translate("header.button")} />
        <HeaderLanguages>{renderLanguages()}</HeaderLanguages>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
