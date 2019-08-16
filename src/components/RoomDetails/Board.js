import * as React from 'react'
import './Board.css'

class Board extends React.Component {
    renderBoard(size) {
        const { room, player } = this.props
        const board = []
        let player1Moves = []
        let player2Moves = []

        if (room.players.length === 2) {
            player1Moves = room.players
                .find(p => p.id === player.playerId).moves
            player2Moves = room.players
                .find(p => p.id !== player.playerId).moves
        }

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const x = player1Moves.filter(move => move.x === j && move.y === i)
                    .map((_, i) => <img className="icon" key={i} src="https://gomokuonline.com/images/blue.png" alt="icon"></img>)
                const o = player2Moves.filter(move => move.x === j && move.y === i)
                    .map((_, i) => <img className="icon" key={i} src="https://gomokuonline.com/images/red.png" alt="icon"></img>)

                const square =
                    <button
                        className="square"
                        key={`${i}-${j}`}
                        value={`${i}-${j}`}
                        onClick={this.props.onClickSquare}
                    >{x}{o}
                    </button>
                board.push(square)
            }
            board.push(<br key={i} />)
        }
        return board
    }

    render() {
        const { room } = this.props

        if (room) {
            return (
                <div className="board">
                    {this.renderBoard(room.board_size)}
                </div>
            )
        } else {
            return null
        }
    }
}

export default Board