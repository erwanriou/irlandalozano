import React from "react"
import propTypes from "prop-types"

// IMPORT STYLING
import { TitleStyle } from "./Title.styles"
import { colors } from "@styles/constants"

const Title = ({ text, color, backgroundColor, borderColor }) => {
  return (
    <TitleStyle color={color} backgroundColor={backgroundColor} borderColor={borderColor}>
      {text}
    </TitleStyle>
  )
}

Title.propTypes = {
  // STRINGS
  text: propTypes.string,
  color: propTypes.string,
  backgroundColor: propTypes.string,
  borderColor: propTypes.string
}

Title.defaultProps = {
  // STRINGS
  color: colors.white,
  backgroundColor: colors.black,
  borderColor: colors.black2
}

export default Title
