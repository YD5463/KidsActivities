import React from 'react';

function VolunteerWorkCard({ work }) {
  return (
    <div className="volunteer-work-card">
      <h3>{work.name}</h3>
      <p>Description: {work.description}</p>
      <p>Location: {work.location}</p>
      <p>Skills Needed: {work.skillsNeeded.join(', ')}</p>
      <p>Volunteers Needed: {work.volunteersNeeded}</p>
      <p>Status: {work.status}</p>
    </div>
  );
}

export default VolunteerWorkCard;
