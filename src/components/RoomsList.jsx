import React from 'react'

function RoomsList({ rooms, setCurrentRoom, currentRoom }) {
  const sortedRooms = rooms.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="rooms-list">
      {sortedRooms.map(room => {
        return (
          <div key={room.id}>
            <a href="#" onClick={() => setCurrentRoom(room)}>{room.name}</a>
          </div>
        )
      })}
    </div>
  )
}

export default RoomsList