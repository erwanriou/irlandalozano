import React from "react"

// IMPORT STYLING
import { ProjectStyle } from "./Project.styles"
import { sizes } from "@styles/constants"

// IMPORT COMPONENT
import Icon from "@components/elements/icon/Icon"

const Project = ({ title, description, icon }) => {
  return (
    <ProjectStyle>
      <Icon icon={icon} size={sizes.large} />
      <h3>{title}</h3>
      <p>{description}</p>
    </ProjectStyle>
  )
}

export default Project
