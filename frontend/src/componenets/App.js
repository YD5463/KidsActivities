import React, { useState } from 'react';
import './App.css';
import VolunteerWorkList from './VolunteerWorkList';
import VolunteerWorkForm from './VolunteerWorkForm';
import LoginForm from '../componenets/LoginForm';

function App() {
  const [volunteerWorks, setVolunteerWorks] = useState([]);

  return (
    <div className="App">
      <h1>Volunteer App</h1>
      <LoginForm />
      <VolunteerWorkForm setVolunteerWorks={setVolunteerWorks} />
      <VolunteerWorkList volunteerWorks={volunteerWorks} />
    </div>
  );
}

export default App;
