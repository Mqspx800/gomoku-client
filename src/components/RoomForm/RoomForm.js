import * as React from 'react'
import { Link, Redirect } from 'react-router-dom'

function RoomForm(props) {
    // const newRoom = props.rooms.find(room => room.players.find(playerId => props.player.playerId === playerId))

    return (
        <div>
            {/* {!props.user.jwt && <Redirect to={'/login'}></Redirect>} */}

            {/* {props.user.jwt && */}
            {/* <div> */}
            <Link to={`/`}>Rooms</Link>
            <form onSubmit={props.onSubmit}>
                <label>
                    Name:
                    <input type="text" required name="name" minLength="4" onChange={props.onChange} value={props.values.name} />
                </label>

                <label>
                    Board Size:
                    <select required value={props.values.boardSize} onChange={props.updateSelection}>
                        <option value=''>--choose board size--</option>
                        <option value='15'>15x15</option>
                        <option value='19'>19x19</option>
                    </select>
                </label>

                <button type="submit">Create</button>
                {props.values.errorMessage && <p>{props.values.errorMessage}</p>}
                {/* {newRoom && <Redirect to={`room/${newRoom.id}`}></Redirect>} */}
            </form>
            {/* </div>} */}
        </div>)
}

export default RoomForm