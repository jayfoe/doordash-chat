import React from 'react';

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
          <a
            className={currentRoom === room ? "active" : ""}
            key={room.id}
            href="#"
            onClick={() => setCurrentRoom(room)}>
              {room.name}
          </a>
        )
      })}
    </div>
  )
}

export default RoomsList