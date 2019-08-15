import * as React from 'react'
import { Redirect } from 'react-router-dom'

export default function LoginForm(props) {
  return (
    <div>
      { props.player.jwt && <Redirect to={'/'}></Redirect> }

      {props.values.signupMode && <Redirect to={'/signup'}></Redirect>}

      <div>
        <form onSubmit={props.onSubmit}>
          <h4>Login your account to play Gomoku</h4>
          <label>
            Username:
             <input type="text" required name="playerName" minLength="4"
              onChange={props.onChange}
              value={props.values.email} />
          </label>

          <label>
            Password:
              <input type="password" required name="password" minLength="4"
              onChange={props.onChange}
              value={props.values.password} />
          </label>

          <button type="submit">Login</button>

          <p>Don't have an account yet? Sign up to create an account</p>

          <button type="button" onClick={props.onClick}>Sign up</button>
        </form>
      </div>
    </div>)
}