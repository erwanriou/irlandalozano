import React from "react"

// IMPORT STYLING
import { ServiceStyle } from "./Service.styles"

const Service = ({ title, img }) => {
  return (
    <ServiceStyle>
      <img src={img} alt={title} />
      <h3>{title}</h3>
    </ServiceStyle>
  )
}

export default Service
