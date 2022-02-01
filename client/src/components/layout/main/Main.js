import React from "react"

// REDUX
import { useSelector } from "react-redux"
import { getTranslate } from "r1-localize"

// IMPORT STYLING
import { MainAboutWrapper, MainServices, MainServicesList, MainProjects, MainProjectList } from "./Main.styles"
import { colors } from "@styles/constants"

// IMPORT COMPONENTS
import Title from "@components/elements/title/Title"
import Service from "@components/elements/service/Service"
import Project from "@components/elements/project/Project"

// IMPORT DATA
import { services } from "@data/services"
import { projects } from "@data/projects"

const Main = () => {
  // HOOKS
  const translate = useSelector(state => getTranslate(state.localize))

  // RENDER FUNCTIONS
  const renderServices = () => services?.map((s, i) => <Service key={i} title={translate(s.translation)} img={s.href} />) ?? []
  const renderProjects = () =>
    projects?.map((s, i) => <Project key={i} title={translate(s.title)} icon={s.icon} description={translate(s.description)} />) ?? []

  // MAIN RENDER
  return (
    <main>
      <MainAboutWrapper id="about">
        <h2>{translate("main.about.title")}</h2>
        <p>{translate("main.about.description")}</p>
      </MainAboutWrapper>
      <MainServices id="services">
        <Title text={translate("main.services.title")} />
        <MainServicesList>{renderServices()}</MainServicesList>
      </MainServices>
      <MainProjects id="projects">
        <Title text={translate("main.projects.title")} color={colors.black} borderColor={colors.lightGrey} backgroundColor={colors.white} />
        <MainProjectList>{renderProjects()}</MainProjectList>
      </MainProjects>
    </main>
  )
}

export default Main
