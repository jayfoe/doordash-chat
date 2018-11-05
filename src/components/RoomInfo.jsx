import React from 'react'

function RoomInfo({ currentUser, roomInfo }) {
  return (
    <div className="room-info">
      {roomInfo
        ? <div>
            <div>{roomInfo.name}</div>
            <div>{roomInfo.users.join(', ')}</div>
          </div>
        : <div>DoorDash Chat!</div>
      }
    </div>
  )
}

export default RoomInfo;