import React from 'react';
import axios from 'axios';
import AddReaction from '../Assets/addReaction.svg';
import Smiley from '../Assets/smiley.svg';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reaction: props.message.reaction
    }
  }

  handleClick = (currentRoom, message) => {
    axios.post(`/api/rooms/${currentRoom}/messages/${message.id}`, {
      reaction: message.reaction ? null : true
    }).then(() => this.setState({ reaction: !this.state.reaction }))
      .catch((err) => console.log("Error posting reaction: ", err));
  }

  render() {
    const {
      currentRoom,
      message,
      currentUser
    } = this.props;
    return (
      <div
        className={message.name === currentUser
          ? "my-message"
          : "other-message"
        }
        key={message.id}>
        <span className="message chat-message">
          {message.message}
        </span>
        <button onClick={() => this.handleClick(currentRoom.id, message)}>
          <img className="reaction" src={this.state.reaction ? Smiley : AddReaction} alt="reaction" />
        </button>
        <span className="message chat-name">{message.name}</span>
      </div>
    )
  }
}

export default Message;