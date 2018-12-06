import React from 'react';
import axios from 'axios';
import RoomsList from './components/RoomsList';
import Messages from './components/Messages';
import RoomInfo from './components/RoomInfo';
import MessageForm from './components/MessageForm';
import Login from './components/Login';
import UserInfo from './components/UserInfo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      rooms: [],
      currentRoom: null,
      messages: [],
      roomInfo: null,
      currentUser: null
    };
  }

  componentDidMount() {
    this.getRooms();
  }
  
  getRooms = () => {
    axios.get('/api/rooms')
      .then(res => this.setState({ rooms: res.data }))
      .catch(err => console.log("Error getting rooms: ", err));
  }

  setCurrentRoom = (currentRoom) => {
    this.setState({ currentRoom });
    this.getMessages(currentRoom.id);
    this.getRoomInfo(currentRoom.id);
  }

  getMessages = (roomId) => {
    axios.get(`/api/rooms/${roomId}/messages`)
      .then(res => this.setState({ messages: res.data }));
  }

  sendMessage = (message) => {
    axios.post(`/api/rooms/${this.state.currentRoom.id}/messages`, {
      name: this.state.currentUser,
      message
    }).then(() => this.getMessages(this.state.currentRoom.id));
  }

  getRoomInfo = (roomId) => {
    axios.get(`/api/rooms/${roomId}`)
      .then(res => this.setState({ roomInfo: res.data }));
  }

  setCurrentUser = (currentUser) => {
    this.setState({ currentUser });
  }

  render() {
    return (
      <div className="container"> 
        {this.state.currentUser
          ? <div className="App">
              <div className="sidebar">
                <UserInfo currentUser={this.state.currentUser} />
                <RoomsList
                  currentUser={this.state.currentUser}
                  rooms={this.state.rooms}
                  setCurrentRoom={this.setCurrentRoom}
                  currentRoom={this.state.currentRoom} />
              </div>
              <div className="chat">
                <RoomInfo
                  currentUser={this.state.currentUser}
                  roomInfo={this.state.roomInfo} />
                <Messages
                  currentUser={this.state.currentUser}
                  currentRoom={this.state.currentRoom}
                  messages={this.state.messages} />
                <MessageForm
                  sendMessage={this.sendMessage}
                  disabled={!this.state.currentRoom} />
              </div>
            </div>
          : <Login setCurrentUser={this.setCurrentUser} />
        }
      </div>
    );
  }
}

export default App;
