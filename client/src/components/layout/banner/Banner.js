import React from "react"

// IMPORT COMPONENT
import Logo from "@components/elements/logo/Logo"

// IMPORT STYLING
import { BannerWrapper } from "./Banner.styles"

// IMPORT UTILS
import { imageBuilder } from "@utils"

const Banner = () => {
  return (
    <BannerWrapper id="home">
      <Logo />
    </BannerWrapper>
  )
}

export default Banner
