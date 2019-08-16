import * as React from 'react'
import { Link } from 'react-router-dom'

export default function SignupForm(props) {
    return (
        <div>
            <Link to={`/login`}>Login</Link>
            <form onSubmit={props.onSubmit}>
                <h4>Create your account</h4>
                <label>
                    Username:
                <input type="text" required name="playerName" minLength="4" onChange={props.onChange} value={props.values.email} />
                </label>

                <label>
                    Password:
                <input type="password" required name="password" minLength="4" onChange={props.onChange} value={props.values.password} />
                </label>

                <button type="submit">Create</button>
                { props.player.id && <p>Player created successfully! You can login with your account!</p>}
            </form>
        </div>)
}