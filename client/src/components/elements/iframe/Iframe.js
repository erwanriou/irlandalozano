import React from "react"
import PropTypes from "prop-types"

// IMPORT STYLING
import { IframeStyle } from "./Iframe.styles"

const Iframe = ({ src }) => {
  return (
    <IframeStyle>
      <iframe
        width="1221"
        height="687"
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </IframeStyle>
  )
}

Iframe.propTypes = {
  // STRINGS
  src: PropTypes.string
}

Iframe.defaultProps = {
  // STRINGS
  src: ""
}

export default Iframe
