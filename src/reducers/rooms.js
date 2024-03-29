import { ALL_ROOMS, NEW_ROOM } from '../actions/rooms'

export default function (state = [], action = {}) {
    switch (action.type) {
        case ALL_ROOMS:
            return action.payload
        case NEW_ROOM:
            return [action.payload, ...state]
        default:
            return state
    }
}
