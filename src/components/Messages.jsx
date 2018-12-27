import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';

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
        {currentRoom &&
          <div>
              {messages.map((message) => {
                return (
                  <Message
                    currentRoom={currentRoom}
                    message={message}
                    currentUser={currentUser} />
                )
              })}
          </div>
        }
      </div>
    );
  }
}

export default Messages;