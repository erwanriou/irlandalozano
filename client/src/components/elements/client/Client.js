import React, { useState, useRef, useEffect } from "react"

// IMPORT STYLING
import { ClientStyle, ClientPreview, ClientModal } from "./Client.styles"
import { sizes } from "@styles/constants"

// IMPORT COMPONENT
import Icon from "@components/elements/icon/Icon"

const Client = ({ image, isVideo, video, i }) => {
  // HOOKS
  const node = useRef()
  const [modal, setModal] = useState({ toggle: false, video: "" })
  const [hover, setHover] = useState(false)

  // LIFECYCLE
  useEffect(() => {
    modal.toggle && document.addEventListener("mousedown", handleClickOutside, false)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, false)
    }
  })

  // HANDLE FUNCTION
  const handleToggle = video => setModal({ toggle: !modal.toggle, video })
  const handleClose = () => setModal({ toggle: false, video: "" })
  const handleClickOutside = e => {
    if (!node.current.contains(e.target)) return setModal({ toggle: false, video: "" })
    return
  }

  // RENDER FUNCTION
  const renderPreview = () =>
    hover && video ? <ClientPreview autoPlay loop muted src={video}></ClientPreview> : <img src={image} alt={`client preview ${i}`} />

  // MAIN RENDER
  return (
    <ClientStyle onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={() => video && handleToggle(video)}>
      {isVideo && <Icon icon="play_arrow" size={sizes.large} />}
      {renderPreview()}
      {modal.toggle && (
        <ClientModal>
          <div ref={node}>
            <Icon icon="close" onClick={handleClose} />
            <video autoPlay loop muted src={video}></video>
          </div>
        </ClientModal>
      )}
    </ClientStyle>
  )
}

export default Client
