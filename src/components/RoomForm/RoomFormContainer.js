import React from 'react'
import { connect } from 'react-redux'
import { createRoom } from '../../actions/rooms'
import RoomForm from './RoomForm'

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

    onSubmit = (event) => {
        event.preventDefault()

        this.props.createRoom(this.state)

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
        />)
    }
}

// function mapStateToProps(state) {
//     return {
//         player: state.player
//     }
// }

const mapDispatchToProps = {
    createRoom
}

export default connect(null, mapDispatchToProps)(RoomFormContainer)