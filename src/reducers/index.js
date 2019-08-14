import { combineReducers } from 'redux'
import player from './player'
import rooms from './rooms'
import room from './room'

export default combineReducers({
  player,
  rooms,
  room
})
