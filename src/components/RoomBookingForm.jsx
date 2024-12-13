// src/components/RoomBookingForm.jsx
import { useState } from 'react';
import axios from 'axios';

function RoomBookingForm() {
  const [unit, setUnit] = useState('');
  const [meetingRoom, setMeetingRoom] = useState('');
  const [capacity, setCapacity] = useState('');
  const [meetingDate, setMeetingDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [participants, setParticipants] = useState('');
  const [consumptionType, setConsumptionType] = useState([]);
  const [consumptionCost, setConsumptionCost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRoom = {
      unit,
      meetingRoom,
      capacity,
      meetingDate,
      startTime,
      endTime,
      participants,
      consumptionType,
      consumptionCost,
    };

    axios.post('http://localhost:5000/api/rooms', newRoom)
      .then(() => alert('Room booked successfully'))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <input
        type="text"
        placeholder="Unit"
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Ruang Meeting"
        value={meetingRoom}
        onChange={(e) => setMeetingRoom(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Kapasitas"
        value={capacity}
        onChange={(e) => setCapacity(e.target.value)}
        required
      />
      <input
        type="date"
        value={meetingDate}
        onChange={(e) => setMeetingDate(e.target.value)}
        required
      />
      <input
        type="time"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        required
      />
      <input
        type="time"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Jumlah Peserta"
        value={participants}
        onChange={(e) => setParticipants(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Jenis Konsumsi"
        value={consumptionType}
        onChange={(e) => setConsumptionType(e.target.value.split(','))}
      />
      <input
        type="number"
        placeholder="Nominal Konsumsi"
        value={consumptionCost}
        onChange={(e) => setConsumptionCost(e.target.value)}
      />
      <button type="submit">Simpan</button>
    </form>
  );
}

export default RoomBookingForm;
