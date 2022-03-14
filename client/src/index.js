import React from "react"
import ReactDOM from "react-dom"

// REDUX
import { store } from "./store"
import { Provider } from "react-redux"

//TRANSLATIONS
import { LocalizeProvider } from "r1-localize"
import { initialize } from "@utils"

// IMPORT COMPONENTS
import App from "./components/App"

// RENDER
ReactDOM.render(
  <Provider store={store}>
    <LocalizeProvider store={store} initialize={initialize()}>
      <App />
    </LocalizeProvider>
  </Provider>,
  document.getElementById("root")
)
