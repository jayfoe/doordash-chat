import React from 'react'

function Messages({ currentRoom, messages }) {
  return (
    <div className="chat">
      {currentRoom
        ? <div>
            {messages.map((message, index) => {
              return (
                <div key={message.id}>
                  <div>{message.name}: {message.message}</div>
                </div>
              )
            })}
          </div>
        : <div className="join-room">
            Join a room!
          </div>
      }
    </div>
  )
}

export default Messages