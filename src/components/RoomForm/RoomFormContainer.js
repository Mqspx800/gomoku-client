import React from 'react'
import request from 'superagent'
import { connect } from 'react-redux'
import RoomForm from './RoomForm'
import { newRoom } from '../../actions/rooms'
import { url } from '../../constants'

class RoomFormContainer extends React.Component {
    state = {
        name: '',
        boardSize: ''
    }

    onChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    updateSelection = (event) => {
        this.setState({
            boardSize: event.target.value
        })
    }

    onSubmit = async (event) => {
        event.preventDefault()

        await request
            .post(`${url}/room`)
            .send({
                name: this.state.name,
                board_size: this.state.boardSize,
                playerId: this.props.player.playerId
            })
            .then(response => response.body.errors
                ? this.setState({
                    errorMessage: response.body.errors[0].message
                })
                : response)
            .then(response => {
                const room = response.body
                newRoom(room)
                this.props.history.push(`/room/${room.id}`)
            })
            .catch(err => console.error(err))
    }

    render() {
        return (<RoomForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            updateSelection={this.updateSelection}
            values={this.state}
            rooms={this.props.rooms}
            player={this.props.player}
        />)
    }
}

function mapStateToProps(state) {
    return {
        rooms: state.rooms,
        player: state.player
    }
}

export default connect(mapStateToProps, { newRoom })(RoomFormContainer)