import React, { useState, useRef, useEffect } from "react"
import { useMediaQuery } from "react-responsive"

// REDUX
import { useSelector } from "react-redux"
import { getTranslate } from "r1-localize"

// IMPORT STYLING
import { HeaderWrapper, HeaderContainer, HeaderMenu, HeaderLogo, HeaderNav, HeaderLink, HeaderLanguages, HeaderSpan } from "./Header.styles"
import { colors, sizes } from "@styles/constants"

// IMPORT COMPONENTS
import Logo from "@components/elements/logo/Logo"
import Button from "@components/elements/button/Button"
import Icon from "@components/elements/icon/Icon"

// IMPORT DATA
import { links } from "@data/links"

const Header = ({ languages, setActiveLanguage }) => {
  // HOOKS
  const node = useRef()
  const [toggle, setToggle] = useState(false)
  const isTablet = useMediaQuery({ query: "(max-width: 750px)" })
  const translate = useSelector(state => getTranslate(state.localize))

  // USEEFFECTS
  useEffect(() => {
    toggle && document.addEventListener("mousedown", handleClickOutside, false)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, false)
    }
  })

  // HANDLE FUNCTIONS
  const handleMenu = () => setToggle(!toggle)
  const handleCloseMenu = () => setToggle(false)
  const handleScrolling = (e, href) => {
    e.preventDefault()
    const element = document.getElementById(href)
    element && element.scrollIntoView({ behavior: "smooth", block: "start" })
  }
  const handleClickOutside = e => {
    if (!node.current.contains(e.target)) return setToggle(false)
    return
  }
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
      <HeaderLink
        key={i}
        onClick={e => {
          handleCloseMenu()
          handleScrolling(e, link.href)
        }}
      >
        {translate(link.translation)}
      </HeaderLink>
    ))

  const renderMenuContent = () => {
    return (
      <>
        <HeaderNav>{renderLinks()}</HeaderNav>
        <Button onClick={handleCloseMenu} text={translate("header.button")} />
        <HeaderLanguages>{renderLanguages()}</HeaderLanguages>
        {toggle && <Icon onClick={handleMenu} icon="close" color={colors.white} size={sizes.large} />}
      </>
    )
  }

  const renderDesktopMenu = () => {
    return (
      <HeaderContainer>
        <HeaderLogo onClick={e => handleScrolling(e, "home")}>
          <Logo />
        </HeaderLogo>
        {renderMenuContent()}
      </HeaderContainer>
    )
  }

  const renderMobileMenu = () => {
    return (
      <>
        {
          <HeaderMenu ref={node} toggle={toggle}>
            {renderMenuContent()}
          </HeaderMenu>
        }
        <Icon onClick={handleMenu} color={colors.white} size={sizes.large} />
      </>
    )
  }

  // MAIN RENDER
  return <HeaderWrapper>{!isTablet ? renderDesktopMenu() : renderMobileMenu()}</HeaderWrapper>
}

export default Header
