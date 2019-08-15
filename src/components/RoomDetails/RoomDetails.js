import * as React from 'react'
import { Link } from 'react-router-dom'
import Board from './Board'
import './RoomDetails.css'

function RoomDetails(props) {
    const { room, player } = props

    return (
        <div>
            <Link to={`/`} onClick={props.onClickNewGame}>New Game</Link>
            {room &&
                <div>
                    <p>Welcome to {room.name} room, {player.playerName}!</p>
                    <p>Status: {room.status}</p>

                    {room.players.length === 1 &&
                        <p>Players joined: {room.players[0].playerName}</p>
                    }
                    {room.players.length === 2 &&
                        <p>Players joined: {room.players[0].playerName}, {room.players[1].playerName}</p>
                    }

                    {room.players.length === 1 &&
                        <p>Waiting for another player...</p>
                    }

                    {room.status === 'await' && room.players.length === 2 &&
                        <div>
                            <p>Two players joined! You can start the game</p>
                            <button onClick={props.onClick}>Start game</button>
                        </div>
                    }

                    {/* <div id="scoreBoard">
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
                    </div> */}

                    {room.status === 'started' &&
                        <p>Next turn:
                            <span>{room.players.length === 2 && room.players
                                    .filter(player => player.id === room.turn)
                                    .map(player => player.playerName)}
                            </span>
                        </p>
                    }
                </div>
            }
            <Board onClickSquare={props.onClickSquare} room={room} player={player} />
        </div>
    )
}

export default RoomDetails