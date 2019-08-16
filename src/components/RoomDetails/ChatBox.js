import React from 'react'

export default function ChatBox(props) {
  return (
    <div>
      <form className='msgBox' onSubmit={props.onSubmit} >
        <div className='message-box'>
          {props.messages && props.messages.sort(props.messages.id).map(msg =>
            <p>{msg.userName}  :  {msg.text}</p>
          )}
        </div>
        <label>
          Message:
             <input type="text" required name="message"
            onChange={props.onChange}
            value={props.values.message} />
        </label>
        <button type='submit' >Send</button>
      </form>
    </div>
  )
}