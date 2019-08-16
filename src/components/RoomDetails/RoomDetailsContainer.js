import React from 'react'
import request from 'superagent'
import { connect } from 'react-redux'
import RoomDetails from './RoomDetails'
import ChatBox from './ChatBox'
import { url } from '../../constants'

class RoomDetailsContainer extends React.Component {
  state = {
    message:' '
  }
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

  onClickNewGame = async () => {
    const { id } = this.props.match.params
    await request
      .put(`${url}/room/leave/${parseInt(id)}`)
      .send({
        playerId: this.props.player.playerId
      })
      .catch(err => console.error(err))
  }

  onClick = async () => {
    console.log('eeee')
    const { id } = this.props.match.params
    await request
      .put(`${url}/room/start/${parseInt(id)}`)
      .catch(err => console.error(err))
  }

  onClickSquare = async (event) => {
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
        .then(response => console.log(response.text))
        .catch(err => console.error(err))
  }

  onSubmit = async (event) => {
    event.preventDefault()
    await request
      .post(`${url}/message`)
      .send(
        {
          roomId: parseInt(this.props.match.params.id),
          playerName: this.props.player.playerName,
          message: this.state.message
        })
        .catch(
          console.error
        )
      
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { id } = this.props.match.params
    const room = this.props.rooms.find(room => room.id === parseInt(id))
    return (<div className="roomDetails"><RoomDetails
      room={room}
      player={this.props.player}
      onClickNewGame={this.onClickNewGame}
      onClickSquare={this.onClickSquare}
      onClick={this.onClick}
    />
      {<ChatBox onChange={this.onChange} onSubmit={this.onSubmit} messages={room&&room.messages} values={this.state} />}
    </div>
    )
  }
}

const mapStateToProps = state => ({
  rooms: state.rooms,
  player: state.player
})

export default connect(mapStateToProps)(RoomDetailsContainer)