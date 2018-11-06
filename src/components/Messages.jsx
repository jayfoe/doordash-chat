import React from 'react';
import ReactDOM from 'react-dom';

class Messages extends React.Component {
  componentWillUpdate() {
    const node = ReactDOM.findDOMNode(this);
    this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 400 >= node.scrollHeight;
  }

  componentDidUpdate() {
    if (this.shouldScrollToBottom) {
      const node = ReactDOM.findDOMNode(this);
      node.scrollTop = node.scrollHeight;
    }
  }

  render() {
    const {
      currentRoom,
      messages,
      currentUser
    } = this.props;
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
}

export default Messages;