import React from "react"

// REDUX
import { useSelector } from "react-redux"
import { getTranslate } from "r1-localize"

// IMPORT STYLING
import { MainAboutWrapper, MainServices, MainServicesList, MainProjects, MainProjectList, MainClients, MainClientList } from "./Main.styles"
import { colors } from "@styles/constants"

// IMPORT COMPONENTS
import Title from "@components/elements/title/Title"
import Service from "@components/elements/service/Service"
import Project from "@components/elements/project/Project"
import Client from "@components/elements/client/Client"

// IMPORT DATA
import { services } from "@data/services"
import { projects } from "@data/projects"
import { clients } from "@data/clients"

const Main = () => {
  // HOOKS
  const translate = useSelector(state => getTranslate(state.localize))

  // RENDER FUNCTIONS
  const renderServices = () => services?.map((s, i) => <Service key={i} title={translate(s.translation)} img={s.href} />) ?? []
  const renderClients = () => clients?.map((c, i) => <Client key={i} image={c.image} isVideo={c.isVideo} video={c.video} i={i} />) ?? []
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
      <MainClients id="clients">
        <Title text={translate("main.clients.title")} color={colors.black} borderColor={colors.lightGrey} backgroundColor={colors.white} />
        <Title text={translate("main.clients.subtitle")} color={colors.white} borderColor={colors.black2} backgroundColor={colors.black} />
        <MainClientList>{renderClients()}</MainClientList>
      </MainClients>
    </main>
  )
}

export default Main
