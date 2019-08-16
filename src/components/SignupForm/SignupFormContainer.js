import React from 'react'
import SignupForm from './SignupForm'
import { connect } from 'react-redux'
import { signup } from '../../actions/player'

class SignupFormContainer extends React.Component {
  state = {
    playerName: '',
    password: ''
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.signup(this.state.playerName, this.state.password)
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return <SignupForm
      player={this.props.player}
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
      error={this.props.error}
    />
  }
}

function mapStateToProps(state) {
  return {
    player: state.player,
    error: state.error
  }
}

export default connect(mapStateToProps, { signup })(SignupFormContainer)