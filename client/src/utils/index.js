import { renderToStaticMarkup } from "react-dom/server"
import ES from "@translations/es.translations.json"
import EN from "@translations/en.translations.json"

const languages = [
  {
    name: "en-US",
    code: "en",
    translation: EN
  },
  {
    name: "es-MX",
    code: "es",
    translation: ES
  }
]

export const imageBuilder = path => `https://ik.imagekit.io/bypiuaav6q8${path}`
export const activateTranslations = addtranslate => languages.map(({ translation, code }) => addtranslate(translation, code))
export const initialize = () => ({
  languages: languages.map(({ name, code }) => ({ name, code })),
  translation: EN,
  options: { renderToStaticMarkup }
})
