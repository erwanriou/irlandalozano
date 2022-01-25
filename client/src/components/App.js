import React, { useEffect } from "react"

import { withLocalize } from "r1-localize"

//IMPORT COMPONENTS
import Header from "@components/layout/header/Header"
import Banner from "@components/layout/banner/Banner"
import Main from "@components/layout/main/Main"
import Footer from "@components/layout/footer/Footer"

//IMPORT STYLES
import "../styles/reset.css"

// IMPORT UTILS
import { activateTranslations } from "@utils"

const App = ({ languages, setActiveLanguage, addTranslationForLanguage }) => {
  // USE ONCE
  useEffect(() => {
    activateTranslations(addTranslationForLanguage)
  }, []) // eslint-disable-line

  return (
    <>
      <Header languages={languages} setActiveLanguage={setActiveLanguage} />
      <Banner />
      <Main />
      <Footer />
    </>
  )
}

export default withLocalize(App)
