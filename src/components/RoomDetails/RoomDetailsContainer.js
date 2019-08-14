import React from 'react'
import { connect } from 'react-redux'
import RoomDetails from './RoomDetails'
import { loadRoom } from '../../actions/rooms'

class RoomDetailsContainer extends React.Component {
    state = {
        clickedSquares: [],
        xIsNext: true
    }

    componentDidMount() {
        this.props.loadRoom(Number(this.props.match.params.id))
    }

    onClick = (event) => {
        const clickedSquare = this.state.clickedSquares.find(square => square.x === event.target.value || square.o === event.target.value)

        if (!clickedSquare && this.state.xIsNext) {
            this.state.clickedSquares.push({x: event.target.value})
            this.setState({
                xIsNext: false
            })
        }

        if (!clickedSquare && !this.state.xIsNext) {
            this.state.clickedSquares.push({o: event.target.value})
            this.setState({
                xIsNext: true
            })
        }
    }

    render() {
        return (<RoomDetails 
            room={this.props.room}
            onClick={this.onClick}
            values={this.state}
        />)
    }
}

const mapStateToProps = state => ({
    room: state.room,
    // player: state.player
})

const mapDispatchToProps = {
    loadRoom
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomDetailsContainer)