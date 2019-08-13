import React from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
// import { login } from '../../actions/users'

class LoginFormContainer extends React.Component {
    state = { 
        username: '', 
        password: '',
        signupMode: false
    }

    onSubmit = (event) => {
        event.preventDefault()
        // this.props.login(this.state.username, this.state.password)
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
            // user={this.props.user}
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            onClick={this.onClick}
            values={this.state}
        />
    }
}

// function mapStateToProps(state) {
//     return {
//         user: state.user
//     }
// }

// const mapDispatchToProps = {
//     login
// }

export default connect()(LoginFormContainer)