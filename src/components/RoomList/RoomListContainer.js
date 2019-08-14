import React, { Component } from 'react'
import { getRooms } from '../../actions/rooms'
import RoomList from './RoomList'
import { connect } from 'react-redux'

class RoomListContainer extends Component {
    state = { createMode: false }
    
    onClick = () => {
        this.setState({
            createMode: true
        })
    }

    componentDidMount() {
        this.props.getRooms()
    }

    render() {
        return (
            <RoomList
                rooms={this.props.rooms}
                createMode={this.state.createMode}
                onClick={this.onClick}
                // player={this.props.player}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        rooms: state.rooms,
        // player: state.player
    }
}

const mapDispatchToProps = { getRooms }

export default connect(mapStateToProps, mapDispatchToProps)(RoomListContainer)