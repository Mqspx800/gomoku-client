import React from 'react'
import { Link } from 'react-router-dom'

function RoomList(props) {
    const { rooms, player } = props

    return (
        <div>
            {player.jwt && <h4>Welcome {player.playerName}</h4>}
            <Link to={'/rooms/create'}>Create new room</Link>
            {rooms &&
                rooms.map(room =>
                    <div key={room.id}>
                        <h4>{room.name}</h4>
                        {room.players.length 
                            ? <p>Players joined: 
                            {room.players.length === 1 && <span>{room.players[0].playerName}</span>}
                            {room.players.length === 2 && <span>{room.players[0].playerName}, {room.players[1].playerName}</span>}
                            </p>
                            : <p>{room.status}</p>}
                        {room.players.length < 2 && <Link to={`/room/${room.id}`} onClick={props.onClick}>join</Link>}
                        {room.players.length === 2 && <p>full</p>}
                    </div>
                )}
        </div>
    )
}

export default RoomList