import { combineReducers } from "redux"
import { syncHistoryWithStore, routerReducer } from "react-router-redux"

import { members } from "./members"

const main = (state = {}, action) => {
  switch(action.type){
    default:
      return state
  }
}

const mainReducer = combineReducers({
  main,
  members,
  routing: routerReducer
})

export default mainReducer