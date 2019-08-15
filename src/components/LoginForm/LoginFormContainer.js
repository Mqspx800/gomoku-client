import React from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { login } from '../../actions/player'

class LoginFormContainer extends React.Component {
  state = {
    playerName: '',
    password: '',
    signupMode: false
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state.playerName, this.state.password)
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onClick = () => {
    this.setState({
      signupMode: true
    })
  }

  render() {
    return <LoginForm
      player={this.props.player}
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      onClick={this.onClick}
      values={this.state}
      error={this.props.error}
    />
  }
}

function mapStateToProps(state) {
  return {
    player: state.player,
    error:state.error
  }
}

export default connect(mapStateToProps, { login })(LoginFormContainer)