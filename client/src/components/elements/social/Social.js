import React from "react"

//IMPORT STYLES
import { Contact, Whatsapp, ImgStyle, Instagram, IconStyle2 } from "./Social.styles"

const Social = () => {
  // HANDLE FUNCTIONS
  const handleClick = link => {
    return window.open(link)
  }

  // MAIN RENDER
  return (
    <Contact>
      <ImgStyle
        src="https://ik.imagekit.io/bypiuaav6q8/IRLANDA_LOZANO_STUDIO/w_1y0SK2FzNn.png?updatedAt=1637331044576"
        onClick={() => handleClick("https://wa.me/525522537277")}
      />
      <ImgStyle
        src="https://ik.imagekit.io/bypiuaav6q8/IRLANDA_LOZANO_STUDIO/i_JnqyQiTsr.png?updatedAt=1637331030534"
        onClick={() => handleClick("https://www.instagram.com/irlanda_lozano_studio/")}
      />
    </Contact>
  )
}

export default Social
