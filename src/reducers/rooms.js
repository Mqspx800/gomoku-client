import { ALL_ROOMS } from '../actions/rooms'

export default function (state = [], action = {}) {
    switch (action.type) {
        case ALL_ROOMS:
            return action.payload
        default:
            return state
    }
}
