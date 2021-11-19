import React from "react"

//IMPORT COMPONENTS
import Logo from "../../elements/logo/Logo"
//IMPORT STYLES
import { MainImg, MainContainer } from "./Main.styles"

const Main = () => {
  return (
    <MainContainer>
      <MainImg src="https://ik.imagekit.io/bypiuaav6q8/IRLANDA_LOZANO_STUDIO/ross-sneddon-0MBt0sGU8UA-unsplash_f206Y7AiA.png?updatedAt=1637314814629" />
      <Logo />
    </MainContainer>
  )
}

export default Main
