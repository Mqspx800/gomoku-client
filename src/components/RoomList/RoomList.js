import React from 'react'
import { Link } from 'react-router-dom'

function RoomList(props) {
    const { rooms } = props
    
    return (
        <div>
            {/* {player.jwt && <h4>Welcome {player.username}</h4>} */}
            {rooms && rooms.map(room =>
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