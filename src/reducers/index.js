import { combineReducers } from 'redux'
import player from './player'
import rooms from './rooms'
import error from './error'

export default combineReducers({
  player,
  rooms,
  error
})
