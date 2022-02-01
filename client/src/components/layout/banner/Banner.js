import React from "react"

// IMPORT STYLING
import { BannerWrapper } from "./Banner.styles"

// IMPORT UTILS
import { imageBuilder } from "@utils"

const Banner = () => {
  return (
    <BannerWrapper id="home">
      <video autoPlay loop muted>
        <source src={imageBuilder("/banner_video_CBE5DgmhkHf.mp4")} type="video/mp4" />
      </video>
    </BannerWrapper>
  )
}

export default Banner
