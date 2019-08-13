import React from 'react'
import { connect } from 'react-redux'
import RoomDetails from './RoomDetails'

class RoomDetailsContainer extends React.Component {
    componentDidMount() {
        // this.props.loadRoom(Number(this.props.match.params.id))
    }

    render() {
        return (<RoomDetails 
            
        />)
    }
}

// const mapStateToProps = state => ({
//     room: state.room,
//     player: state.player
// })

export default connect()(RoomDetailsContainer)