import React from "react"
import propTypes from "prop-types"

// IMPORT STYLING
import { TitleStyle } from "./Title.styles"
import { colors } from "@styles/constants"

const Title = ({
  //STRINGS,
  text,
  color,
  backgroundColor,
  borderColor,
  // BOOL
  isLine
}) => {
  return (
    <TitleStyle color={color} backgroundColor={backgroundColor} borderColor={borderColor} isLine={isLine}>
      {text}
    </TitleStyle>
  )
}

Title.propTypes = {
  // BOOL
  isLine: propTypes.bool,
  // STRINGS
  text: propTypes.string,
  color: propTypes.string,
  backgroundColor: propTypes.string,
  borderColor: propTypes.string
}

Title.defaultProps = {
  // BOOL
  isLine: true,
  // STRINGS
  color: colors.white,
  backgroundColor: colors.black,
  borderColor: colors.black2
}

export default Title
