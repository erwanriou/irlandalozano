import React from "react"

// REDUX
import { useSelector } from "react-redux"
import { getTranslate } from "r1-localize"

// UTIL
import { imageBuilder } from "@utils"

// STYLING
import { FooterStyle } from "./Footer.styles"

const Footer = ({ languages }) => {
  // HOOKS
  const translate = useSelector(state => getTranslate(state.localize))
  const { code: language } = languages.find(l => l.active)

  return (
    <FooterStyle>
      <span>
        {translate("footer.content", { date: new Date().getFullYear() })} |{" "}
        <a href={imageBuilder(language === "en" ? "privacy-policy-en_Dy43YMDIJ.pdf" : "privacy-policy_HAqzmk2Gq.pdf")} target="_blank">
          {translate("footer.privacy")}
        </a>
      </span>
    </FooterStyle>
  )
}

export default Footer
