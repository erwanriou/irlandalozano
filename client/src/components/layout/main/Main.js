import React from "react"

// REDUX
import { useSelector } from "react-redux"
import { getTranslate } from "r1-localize"

// IMPORT STYLING
import { MainAboutWrapper } from "./Main.styles"

const Main = () => {
  // HOOKS
  const translate = useSelector(state => getTranslate(state.localize))

  return (
    <main>
      <MainAboutWrapper>
        <h2>{translate("main.about.title")}</h2>
        <p>{translate("main.about.description")}</p>
      </MainAboutWrapper>
    </main>
  )
}

export default Main
