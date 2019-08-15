import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginFormContainer from './components/LoginForm/LoginFormContainer'
import SignupFormContainer from './components/SignupForm/SignupFormContainer'
import RoomListContainer from './components/RoomList/RoomListContainer'
import RoomDetailsContainer from './components/RoomDetails/RoomDetailsContainer'
import RoomFormContainer from './components/RoomForm/RoomFormContainer'
import { url } from './constants'
import { allRooms } from './actions/rooms'

class App extends React.Component {
  source = new EventSource(`${url}/stream`)

  componentDidMount () {
    this.source.onmessage = (event) => {
      const rooms = JSON.parse(event.data)
      this.props.allRooms(rooms)
    }
  }

  render() {
    return (
        <div className="App">
          {!this.props.player.jwt && <Redirect to={'/login'}></Redirect>}
          <Route path="/" exact component={RoomListContainer} />
          <Route path="/room/:id" component={RoomDetailsContainer} />
          <Route path="/rooms/create" component={RoomFormContainer} />
          <Route path="/login" exact component={LoginFormContainer} />
          <Route path="/signup" exact component={SignupFormContainer} />
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    player: state.player
  }
}

const mapDispatchToProps = {
  allRooms
}

export default connect (mapStateToProps, mapDispatchToProps)(App)
