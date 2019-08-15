import {LOGIN_ERROR} from '../actions/player'

export default function (state=[],action = {}){
  switch (action.type){
  case LOGIN_ERROR:
    return action.err.response.body
  default:
    return state
  }
}