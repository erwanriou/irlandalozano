import { combineReducers } from "redux"
import { localizeReducer } from "r1-localize"

const reducer = () =>
  combineReducers({
    localize: localizeReducer
  })

export default reducer
