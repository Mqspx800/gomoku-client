import React from 'react'
import { Route } from 'react-router-dom'
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
          <Route path="/" exact component={RoomListContainer} />
          <Route path="/room/:id" component={RoomDetailsContainer} />
          <Route path="/rooms/create" component={RoomFormContainer} />
          <Route path="/login" exact component={LoginFormContainer} />
          <Route path="/signup" exact component={SignupFormContainer} />
        </div>
    )
  }
}

const mapDispatchToProps = {
  allRooms
}

export default connect (null, mapDispatchToProps)(App)
