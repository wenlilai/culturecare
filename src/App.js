
import React from 'react';
import Navigation from './Navigation/Nav';
import TherapistPortal from './pages/TherapistPortal/TherapistPortal';
import SelectClinician from './pages/SelectClinician/SelectClinician';
import PendingRequest from './pages/PendingRequest/PendingRequest';
// import Sidebar from './pages/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// const Stack = createNativeStackNavigator();

function App() {
  return (
    <div className='all'>
      <Router>
        {/* <Sidebar /> */}
        <Navigation />

        <Routes>
          <Route path="/" exact element={<SelectClinician />} />
          <Route path="/pending-request" element={<TherapistPortal />} />
          <Route path="/pending-request-details" element={<PendingRequest />} />
        </Routes>

      </Router >
    </div>
  );
}

export default App;
