import React from 'react'
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import LoginFormContainer from './components/LoginForm/LoginFormContainer'
import SignupFormContainer from './components/SignupForm/SignupFormContainer'
import RoomListContainer from './components/RoomList/RoomListContainer'
import RoomDetailsContainer from './components/RoomDetails/RoomDetailsContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Route path="/" exact component={RoomListContainer} />
        <Route path="/room/:id" component={RoomDetailsContainer} />
        <Route path="/login" exact component={LoginFormContainer} />
        <Route path="/signup" exact component={SignupFormContainer} />
      </div>
    </Provider>
  )
}

export default App
