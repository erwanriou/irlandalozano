import React from "react"

// IMPORT STYLING
import { ContactStyle, ContactIcons } from "./Contact.styles"
import { colors } from "@styles/constants"

// IMPORT COMPONENT
import Icon from "@components/elements/icon/Icon"

// IMPORT DATA
import { contacts } from "@data/contacts"

const Contact = ({ translate }) => {
  const handleClick = (link, isEmail = false) => {
    return isEmail ? (location.href = `mailto:${link}`) : window.open(link)
  }

  // RENDER FUNCTION
  const renderIcons = () => {
    return (
      <ContactIcons>
        {contacts.map((c, i) => (
          <Icon key={i} icon={c.icon} color={colors.white} onClick={() => handleClick(c.link, c.isEmail)} />
        ))}
      </ContactIcons>
    )
  }
  // MAIN RENDER
  return (
    <ContactStyle>
      {renderIcons()}
      <h3>{translate("main.contact.adress.1")}</h3>
      <p>{translate("main.contact.adress.2")}</p>
    </ContactStyle>
  )
}

export default Contact
