import React from "react"

// REDUX
import { useSelector } from "react-redux"
import { getTranslate } from "r1-localize"

// IMPORT STYLING
import { MainAboutWrapper, MainServices, MainServicesList } from "./Main.styles"

// IMPORT COMPONENTS
import Title from "@components/elements/title/Title"
import Service from "@components/elements/service/Service"

// IMPORT DATA
import { services } from "@data/services"

const Main = () => {
  // HOOKS
  const translate = useSelector(state => getTranslate(state.localize))

  // RENDER FUNCTIONS
  const renderServices = () => {
    return services?.map(s => <Service title={translate(s.translation)} img={s.href} />) ?? []
  }
  // MAIN RENDER
  return (
    <main>
      <MainAboutWrapper>
        <h2>{translate("main.about.title")}</h2>
        <p>{translate("main.about.description")}</p>
      </MainAboutWrapper>
      <MainServices>
        <Title text={translate("main.services.title")} />
        <MainServicesList>{renderServices()}</MainServicesList>
      </MainServices>
    </main>
  )
}

export default Main
