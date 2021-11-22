import React from "react"

//IMPORT COMPONENTS
import Logo from "../../elements/logo/Logo"
import Social from "../../elements/social/Social"

//IMPORT STYLES
import { MainBackground, MainContainer, Text, Copyright } from "./Main.styles"

const Main = () => {
  return (
    <MainContainer>
      <MainBackground />
      <Logo />
      <Text>
        <p>COMING SOON</p>
      </Text>
      <Social />
      <Copyright>
        <p>Copyright 2021 Irlanda Lozano Studio © | Todos los derechos reservados</p>
      </Copyright>
    </MainContainer>
  )
}

export default Main
