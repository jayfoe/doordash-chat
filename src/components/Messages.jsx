import React from 'react'

function Messages({ currentUser, currentRoom, messages }) {
  return (
    <div className="messages">
      {currentRoom
        ? <div>
            {messages.map((message, index) => {
              return (
                <div key={message.id}>
                  {message.name}: {message.message}
                </div>
              )
            })}
          </div>
        : <div>
            Join a room!
          </div>
      }
    </div>
  )
}

export default Messages