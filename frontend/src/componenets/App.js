import React, { useState } from 'react';
import './App.css';
import VolunteerWorkList from './VolunteerWorkList';
import VolunteerWorkForm from './VolunteerWorkForm';
import LoginForm from '../componenets/LoginForm';
import RecipeReviewCard from "./CardDemo";

function App() {
  const [volunteerWorks, setVolunteerWorks] = useState([{
    description: 'Description of the volunteer work',
    location: 'Work location',
    skillsNeeded: ['Skill 1', 'Skill 2'],
    volunteersNeeded: 5,
    status: 'Open'
  }]);

  return (
    <div className="App">
      <h1>Volunteer App</h1>
      <LoginForm />
        <RecipeReviewCard/>
      <VolunteerWorkForm setVolunteerWorks={setVolunteerWorks} />
      <VolunteerWorkList volunteerWorks={volunteerWorks} />
    </div>
  );
}

export default App;
