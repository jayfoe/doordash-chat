import React from 'react'

function RoomInfo({ roomInfo }) {
  return (
    <div className="room-info">
      {roomInfo
        ? <div className="room">
            <h2>{roomInfo.name}</h2>
            <h5>{roomInfo.users.join(', ')}</h5>
          </div>
        : <h2 className="room">DoorDash Chat!</h2>
      }
    </div>
  )
}

export default RoomInfo;