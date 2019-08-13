export const ALL_ROOMS = 'ALL_ROOMS'

const rooms = [
    {id: 1, name:'Codaisseur', status: 'Joining...'},
    {id: 2, name:'Amsterdam', status: 'Joining...'},
    {id: 3, name:'Netherlands', status: 'Joining...'}
]

function allRooms(payload) {
    return {
        type: ALL_ROOMS,
        payload
    }
}

export const getRooms = () => (dispatch, getState) => {
    // const state = getState()
    // const { rooms } = state

    // if (!rooms.length) {
    //     request(`${baseUrl}/room`)
    //         .then(response => {
    //             const action = allRooms(response.body)

    //             dispatch(action)
    //         })
    //         .catch(console.error)
    // }

    dispatch(allRooms(rooms))
    return rooms
}
