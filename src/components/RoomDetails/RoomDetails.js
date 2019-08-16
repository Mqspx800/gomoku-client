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
                <div className='roomDetail'>
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
                            <p>{room.winner
                                ? `Winner is ${room.winner}`
                                : 'Two players joined! You can start the game'} </p>
                            <button onClick={props.onClick}>Start game</button>
                        </div>
                    }

                    {room.status === 'started' &&
                        <p>Next turn:
                        {room.players
                            .filter(player => player.id === room.turn)
                            .map(player => {
                                if (player.id === room.players
                                    .find(p => p.id === props.player.playerId).id) {
                                    return <span id='blueText'>{player.playerName}</span>
                                } else {
                                    return <span id='redText'>{player.playerName}</span>
                                }
                            })}
                    </p>
                    }
                </div>
            }
            <Board onClickSquare={props.onClickSquare} room={room} player={player} />
        </div>
    )
}

export default RoomDetails