
import Navigation from './Navigation/Nav';
import Appointments from './Appointments/Appointments';
// import TherapistPortal from './pages/TherapistPortal/TherapistPortal';
import Sidebar from './pages/Sidebar';
import "./App.css";

function App() {
  return (
    <div className='all'>
      <Navigation />
      <Sidebar />
      <Appointments />
    </div>
  );
}

export default App;
