import React from "react"

// REDUX
import { useSelector } from "react-redux"
import { getTranslate } from "r1-localize"

// UTIL
import { imageBuilder } from "@utils"

// STYLING
import { FooterStyle } from "./Footer.styles"

const Footer = () => {
  // HOOKS
  const translate = useSelector(state => getTranslate(state.localize))

  return (
    <FooterStyle>
      <span>
        {translate("footer.content", { date: new Date().getFullYear() })} |{" "}
        <a href={imageBuilder("privacy-policy_HAqzmk2Gq.pdf")} target="_blank">
          {translate("footer.privacy")}
        </a>
      </span>
    </FooterStyle>
  )
}

export default Footer
