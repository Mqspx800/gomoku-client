import request from 'superagent'

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

const baseUrl = 'http://localhost:4000'

function signupSuccess(payload) {
    return {
        type: SIGNUP_SUCCESS,
        payload
    }
}

function loginSuccess(payload) {
    return {
        type: LOGIN_SUCCESS,
        payload
    }
}

export const signup = (email, password) => dispatch => {
    request
        .post(`${baseUrl}/player`)
        .send({ email, password })
        .then(response => {
            const action = signupSuccess(response.body)

            dispatch(action)
        })
        .catch(err => {
            if (err.message === 'Conflict') {
                alert('This username was already used to register. Please choose another username to sign up.')
            }
            console.error(err)
        })
}

export const login = (email, password) => dispatch => {
    request
        .post(`${baseUrl}/login`)
        .send({ email, password })
        .then(response => {
            const action = loginSuccess(response.body)

            dispatch(action)
        })
        .catch(err => {
            if (err.message === 'Bad Request') {
                alert('Your username or password is incorrect!')
            }
            console.error(err)
        })
}
