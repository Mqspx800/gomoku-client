import * as React from 'react'
import './Board.css'

class Board extends React.Component {
    renderBoard(size) {
        const board = []
        const { clickedSquares } = this.props.values

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const x = clickedSquares.filter(square => square.x === `${i}-${j}`)
                    .map((_,i) => <img className="icon" key={i} src="https://gomokuonline.com/images/blue.png" alt="icon"></img>)
                const o = clickedSquares.filter(square => square.o === `${i}-${j}`)
                    .map((_,i) => <img className="icon" key={i} src="https://gomokuonline.com/images/red.png" alt="icon"></img>)

                const square =
                    <button
                        className="square"
                        key={`${i}-${j}`}
                        value={`${i}-${j}`}
                        onClick={this.props.onClick}
                    >{x}{o}
                    </button>
                board.push(square)
            }
            board.push(<br key={i} />)
        }

        return board
    }

    render() {
        return (
            <div className="board">
                {this.renderBoard(15)}
            </div>
        );
    }
}

export default Board