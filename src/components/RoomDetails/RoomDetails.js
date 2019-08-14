import * as React from 'react'
import { Link } from 'react-router-dom'
import Board from './Board'
import './RoomDetails.css'

function RoomDetails(props) {
    return (
        <div>
            <Link to={`/`}>New Game</Link>
            <p>Welcome to {props.room.name} room!</p>
            <div id="scoreBoard">
                Score
                <div id="score">
                    <span id="scorePlayer">Score1</span>
                    <span> - </span>
                    <span id="scorePlayer">Score2</span>
                </div>
                <div id="playersNames">
                    <span id="playerNames">Player1</span>
                    <span> - </span>
                    <span id="playerNames">Player2</span>
                </div>
            </div>
            <p>Next player: {props.values.xIsNext
                ? <span id='blueText'>Blue</span>
                : <span id='redText'>Red</span>}</p>
            <Board onClick={props.onClick} values={props.values} />
        </div>
    )
}

export default RoomDetails