import * as React from 'react'
import Square from './Square'

class Board extends React.Component {
    renderBoard(size) {
        let board = []

        for (let i=0; i < size; i++) {
            for (let j=0; j < size; j++) {
                const square = <Square key={`${i}${j}`} value={`${i}${j}`} />
                board.push(square)
            }
            board.push(<br key={i} />)
        }

        return board
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderBoard(10)}
                </div>
            </div>
        );
    }
}

export default Board