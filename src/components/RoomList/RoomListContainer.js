import React, { Component } from 'react'
import RoomList from './RoomList'
import { connect } from 'react-redux'

class RoomListContainer extends Component {
  render() {
    return (
      <RoomList
        rooms={this.props.rooms}
        onClick={this.onClick}
        player={this.props.player}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    rooms: state.rooms,
    player: state.player
  }
}

export default connect(mapStateToProps)(RoomListContainer)