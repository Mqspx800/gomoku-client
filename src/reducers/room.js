import { ROOM_LOADED } from '../actions/rooms'

export default function (state = [], action = {}) {
    switch (action.type) {
        case ROOM_LOADED:
            return action.payload
        default:
            return state
    }
}
