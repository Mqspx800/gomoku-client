// import request from 'superagent'

export const ALL_ROOMS = 'ALL_ROOMS'
export const ROOM_LOADED = 'ROOM_LOADED'
export const NEW_ROOM = 'NEW_ROOM'

export function allRooms(payload) {
    return {
        type: ALL_ROOMS,
        payload
    }
}

function roomLoaded(payload) {
    return {
        type: ROOM_LOADED,
        payload
    }
}

function newRoom(payload) {
    return {
        type: NEW_ROOM,
        payload
    }
}

// export const loadRoom = (id) => (dispatch, getState) => {
//     // const state = getState().rooms
//     // if (state && state.id === id) return

//     // request(`${baseUrl}/room/${id}`)
//     //     .then(response => {
//     //         dispatch(roomFetched(response.body))
//     //     })
//     //     .catch(console.error)

//     const room = rooms.find(room => room.id === id)
//     dispatch(roomLoaded(room))
//     return room
// }

// export const createRoom = (data) => (dispatch, getState) => {
//     // const state = getState()
//     // const { user } = state

//     // request
//     //     .post(`${baseUrl}/room`)
//     //     .set('Authorization', `Bearer ${user.jwt}`)
//     //     .send(data)
//     //     .then(response => {
//     //         const action = newRoom(response.body)

//     //         dispatch(action)
//     //     })
//     //     .catch(console.error)

//     const room = rooms.push(data)
//     dispatch(newRoom(room))
//     return room
// }