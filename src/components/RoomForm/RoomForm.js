import * as React from 'react'
import { Link, Redirect } from 'react-router-dom'

function RoomForm(props) {
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
            </form>
            {/* </div>} */}
        </div>)
}

export default RoomForm