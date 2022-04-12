import React, { useState, useRef, useEffect } from "react"

// IMPORT STYLING
import { ClientStyle, ClientPreview, ClientModal } from "./Client.styles"
import { sizes } from "@styles/constants"

// IMPORT COMPONENT
import Icon from "@components/elements/icon/Icon"

const Client = ({ image, isVideo, video, i }) => {
  // HOOKS
  const [modal, setModal] = useState({ toggle: false, video: "" })
  const [hover, setHover] = useState(false)

  // HANDLE FUNCTION
  const handleToggle = video => setModal({ toggle: true, video })
  const handleClose = () => setModal({ toggle: false, video: "" })

  // RENDER FUNCTION
  const renderPreview = () =>
    hover && video ? (
      <ClientPreview onClick={() => handleToggle(video)} autoPlay loop muted src={video}></ClientPreview>
    ) : (
      <img src={image} alt={`client preview ${i}`} />
    )

  // MAIN RENDER
  return (
    <ClientStyle onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {isVideo && <Icon icon="play_arrow" size={sizes.large} />}
      {renderPreview()}
      {modal.toggle && (
        <ClientModal>
          <div>
            <Icon icon="close" onClick={handleClose} />
            <video autoPlay loop muted controls src={video}></video>
          </div>
        </ClientModal>
      )}
    </ClientStyle>
  )
}

export default Client
