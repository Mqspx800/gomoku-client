import request from 'superagent'
import { url } from '../constants'

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

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
        .post(`${url}/player`)
        .send({ playerName, password })
        .then(response => {
            const action = signupSuccess(response.body)
            dispatch(action)
        })
        .catch(err => console.error(err))
}

export const login = (playerName, password) => dispatch => {
    request
        .post(`${url}/login`)
        .send({ playerName, password })
        .then(response => {
            const action = loginSuccess(response.body)
            dispatch(action)
        })
        .catch(err => console.error(err))
}
