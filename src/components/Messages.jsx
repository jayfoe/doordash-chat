import React from 'react'

function Messages({ currentUser, currentRoom, messages }) {
  return (
    <div className="messages">
      {currentRoom
        ? <div>
            {messages.map((message) => {
              return (
                <div
                className={message.name === currentUser
                  ? "my-message"
                  : "other-message"
                }
                key={message.id}>
                  <span className="message chat-message">{message.message}</span>
                  <span className="message chat-name">{message.name}</span>
                </div>
              )
            })}
          </div>
        : ""
      }
    </div>
  )
}

export default Messages;