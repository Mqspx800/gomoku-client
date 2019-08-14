import React from 'react'
import { Link, Redirect } from 'react-router-dom'

function RoomList(props) {
    const { rooms } = props

    return (
        <div>
            {/* {player.jwt && <h4>Welcome {player.username}</h4>} */}
            {props.createMode && <Redirect to={'/rooms/create'}></Redirect>}

            {!props.createMode && <button type="button" onClick={props.onClick}>Create new room</button>}
            {!props.createMode &&
                rooms && rooms.map(room =>
                    <div key={room.id}>
                        <h3>
                            <Link to={`/room/${room.id}`}>{room.name}</Link>
                        </h3>
                        <p>{room.status}</p>
                    </div>
                )}
        </div>
    )
}

export default RoomList