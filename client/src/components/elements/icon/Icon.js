import React from "react"
import PropTypes from "prop-types"

// IMPORT STYLING
import { IconStyle } from "./Icon.styles"
import { colors, sizes } from "@styles/constants"

// IMPORT COLLECTION
import { iconsCollection } from "./Icon.collection"

const Icon = ({ icon, size, color, onClick }) => {
  const IconSVG = iconsCollection[icon]

  return (
    <IconStyle size={size} color={color} onClick={onClick}>
      {iconsCollection[icon] ? <IconSVG color={color} /> : icon}
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
