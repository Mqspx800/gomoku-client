import React from 'react'
import request from 'superagent'
import { connect } from 'react-redux'
import RoomDetails from './RoomDetails'
import { url } from '../../constants'

class RoomDetailsContainer extends React.Component {
    async componentDidMount() {
        const { id } = this.props.match.params
        const room = this.props.rooms.find(room => room.id === parseInt(id))

        if (room && room.players.length < 2) {
            await request
                .put(`${url}/room/join/${parseInt(id)}`)
                .send({
                    playerId: this.props.player.playerId
                })
                .catch(err => console.error(err))
        }
    }

    onClickNewGame = async() => {
        const { id } = this.props.match.params

        await request
            .put(`${url}/room/leave/${parseInt(id)}`)
            .send({
                playerId: this.props.player.playerId
            })
            .catch(err => console.error(err))
    }

    onClick = async () => {
        const { id } = this.props.match.params
        await request
            .put(`${url}/room/start/${parseInt(id)}`)
            .catch(err => console.error(err))
    }

    onClickSquare = async (event) => {
        // const clickedSquare = this.state.clickedSquares
        //     .find(square => square.x === event.target.value || square.o === event.target.value)

        // if (!clickedSquare && this.state.xIsNext) {
        //     this.state.clickedSquares.push({ x: event.target.value })
        //     this.setState({
        //         xIsNext: false
        //     })
        // }

        // if (!clickedSquare && !this.state.xIsNext) {
        //     this.state.clickedSquares.push({ o: event.target.value })
        //     this.setState({
        //         xIsNext: true
        //     })
        // }

        const { player } = this.props
        const { id } = this.props.match.params
        const room = this.props.rooms.find(room => room.id === parseInt(id))

        if (player.playerId === room.turn)
            await request
                .post(`${url}/move`)
                .send({
                    playerId: player.playerId,
                    roomId: parseInt(this.props.match.params.id),
                    x: event.target.value.split('-')[1],
                    y: event.target.value.split('-')[0]
                })
                .then(response => console.log(response))
                .catch(err => console.error(err))
    }

    render() {
        const { id } = this.props.match.params
        const room = this.props.rooms.find(room => room.id === parseInt(id))

        return (<RoomDetails
            room={room}
            player={this.props.player}
            onClickNewGame={this.onClickNewGame}
            onClickSquare={this.onClickSquare}
            onClick={this.onClick}
        />)
    }
}

const mapStateToProps = state => ({
    rooms: state.rooms,
    player: state.player
})

export default connect(mapStateToProps)(RoomDetailsContainer)