// src/components/RoomTable.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

function RoomTable() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/rooms')
      .then((response) => setRooms(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <table className="rooms-table">
      <thead>
        <tr>
          <th>Unit</th>
          <th>Ruang Meeting</th>
          <th>Kapasitas</th>
          <th>Tanggal Rapat</th>
          <th>Waktu</th>
          <th>Jumlah Peserta</th>
          <th>Jenis Konsumsi</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {rooms.map((room) => (
          <tr key={room._id}>
            <td>{room.unit}</td>
            <td>{room.meetingRoom}</td>
            <td>{room.capacity}</td>
            <td>{new Date(room.meetingDate).toLocaleDateString()}</td>
            <td>{room.startTime} s/d {room.endTime}</td>
            <td>{room.participants}</td>
            <td>{room.consumptionType.join(', ')}</td>
            <td>
              <button onClick={() => alert(`Edit ${room._id}`)}>Edit</button>
              <button onClick={() => alert(`Delete ${room._id}`)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RoomTable;
