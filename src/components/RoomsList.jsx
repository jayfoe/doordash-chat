import React from 'react';

function RoomsList({ rooms, setCurrentRoom, currentRoom }) {
  const sortedRooms = rooms.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  return (
    <div className="rooms-list">
      <ul>
        {sortedRooms.map(room => {
          const active = currentRoom === room ? "active" : "";
          return (
            <li key={room.id} className={active}>
              <a
                href="#"
                onClick={() => setCurrentRoom(room)}>
                  {room.name}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default RoomsList