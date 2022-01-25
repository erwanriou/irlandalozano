import React from "react"

// IMPORT STYLING
import { BannerWrapper } from "./Banner.styles"

// IMPORT UTILS
import { imageBuilder } from "@utils"

const Banner = () => {
  return (
    <BannerWrapper>
      <video autoPlay loop muted>
        <source
          src={imageBuilder("/IRLANDA_LOZANO_STUDIO/banner_video_CBE5DgmhkHf.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1643144198217")}
          type="video/mp4"
        />
      </video>
    </BannerWrapper>
  )
}

export default Banner
