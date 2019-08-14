import request from 'superagent'

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

const baseUrl = 'http://localhost:5000'

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

export const signup = (playerName, password) => dispatch => {
    request
        .post(`${baseUrl}/player`)
        .send({ playerName, password })
        .then(response => {
            const action = signupSuccess(response.body)
            dispatch(action)
        })
        .catch(err => {
            if (err.message === 'Conflict') {
                alert('This username was already used to register. Please choose another username to sign up.')
            }
            // console.error("keys test:", Object.keys(error))
            // console.error("original test:", error.original)
            // console.error('response test:', error.response)
            // console.error('status', error.status)
        })
}

export const login = (playerName, password) => dispatch => {
    request
        .post(`${baseUrl}/login`)
        .send({ playerName, password })
        .then(response => {
            const action = loginSuccess(response.body)
            dispatch(action)
        })
        .catch(err => {
            console.error(err)
        })
}
