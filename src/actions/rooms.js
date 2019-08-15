export const ALL_ROOMS = 'ALL_ROOMS'
export const ROOM_LOADED = 'ROOM_LOADED'
export const NEW_ROOM = 'NEW_ROOM'

export function allRooms(payload) {
    return {
        type: ALL_ROOMS,
        payload
    }
}

export function newRoom(payload) {
    return {
        type: NEW_ROOM,
        payload
    }
}
