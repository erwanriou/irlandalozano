import React from "react"

//IMPORT COMPONENTS
import Logo from "../../elements/logo/Logo"
import Social from "../../elements/social/Social"

//IMPORT STYLES
import { MainImg, MainContainer, Text } from "./Main.styles"

const Main = () => {
  return (
    <MainContainer>
      <MainImg src="https://ik.imagekit.io/bypiuaav6q8/IRLANDA_LOZANO_STUDIO/ross-sneddon-0MBt0sGU8UA-unsplash_YbPLbUA5j.png?updatedAt=1637314460409" />
      <Logo />
      <Text>
        <p>COMING SOON</p>
      </Text>
      <Social />
    </MainContainer>
  )
}

export default Main
