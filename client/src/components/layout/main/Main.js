import React from "react"

//IMPORT COMPONENTS
import Logo from "../../elements/logo/Logo"
import Social from "../../elements/social/Social"

//IMPORT STYLES
import { MainImg, MainContainer, Text, Copyright } from "./Main.styles"

const Main = () => {
  return (
    <MainContainer>
      <MainImg src="https://ik.imagekit.io/bypiuaav6q8/IRLANDA_LOZANO_STUDIO/it_1h2d1cdwe.png?updatedAt=1637339661982" />
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
