import React from 'react'
import request from 'superagent'
import { connect } from 'react-redux'
import RoomForm from './RoomForm'
import { url } from '../../constants'

class RoomFormContainer extends React.Component {
    state = {
        name: '',
        boardSize: '',
        selectionUpdated: false
    }

    onChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    updateSelection = (event) => {
        this.setState({
            boardSize: event.target.value,
            selectionUpdated: true
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
                errorMessage: response.body.errors[0].message}) 
                : response)
            // .then(_ => {
            //     const room = this.props.rooms.find(room => room.players.find(playerId => this.props.player.playerId === playerId))
            //     this.props.history.push(`/room/${room.id}`)
            // })

        this.setState({
            name: '',
            boardSize: '',
            selectionUpdated: false
        })
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

export default connect(mapStateToProps)(RoomFormContainer)