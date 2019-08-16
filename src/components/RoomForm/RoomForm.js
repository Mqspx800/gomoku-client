import * as React from 'react'
import { Link } from 'react-router-dom'
import './RoomForm.css'

function RoomForm(props) {
    return (
        <div>
            <Link to={`/`}>Rooms</Link>
            <form onSubmit={props.onSubmit}>
                <label>
                    Name:
                    <input type="text" required name="name" minLength="4" onChange={props.onChange} value={props.values.name} />
                </label>

                <label>
                    Board Size:
                    <select className="board-size" required value={props.values.boardSize} onChange={props.updateSelection}>
                        <option value=''>--choose board size--</option>
                        <option value='15'>15x15</option>
                        <option value='19'>19x19</option>
                    </select>
                </label>

                <button className='button' type="submit">Create</button>
                {props.values.errorMessage && <p>{props.values.errorMessage}</p>}
            </form>
        </div>)
}

export default RoomForm