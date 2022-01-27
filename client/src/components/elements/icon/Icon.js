import React from "react"
import PropTypes from "prop-types"
// IMPORT STYLING
import { IconStyle } from "./Icon.styles"
import { colors, sizes } from "@styles/contants"

const Icon = ({ icon, size, color, onClick }) => {
  return (
    <IconStyle size={size} color={color} onClick={onClick}>
      {icon}
    </IconStyle>
  )
}

Icon.propTypes = {
  // STRINGS
  icon: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  // FUNCTION
  onClick: PropTypes.func
}

Icon.defaultProps = {
  // STRINGS
  icon: "menu",
  size: sizes.small,
  color: colors.black,
  // FUNCTION
  onClick: () => {}
}

export default Icon
