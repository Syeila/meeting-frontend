import RoomTable from './components/RoomTable';
import RoomBookingForm from './components/RoomBookingForm';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>iMeeting</h1>
        <button className="add-button">+ Pesan Ruangan</button>
      </header>
      <RoomBookingForm />
      <RoomTable />
    </div>
  );
}

export default App;
