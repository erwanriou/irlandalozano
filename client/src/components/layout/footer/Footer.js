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
        <a href={imageBuilder(language === "en" ? "Aviso_de_Privacidad.pdf" : "Aviso_de_Privacidad_ingles.pdf")} target="_blank">
          {translate("footer.privacy")}
        </a>
      </span>
    </FooterStyle>
  )
}

export default Footer
