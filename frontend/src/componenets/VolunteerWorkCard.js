import React from 'react';
import './VolunteerWorkCard.css';

function VolunteerWorkCard({ work }) {
  return (
    <div className="volunteer-work-card" style={work.style}>
      <h3>{work.name}</h3>
      <p className="work-description">Description: {work.description}</p>
      <p className="work-location">Location: {work.location}</p>
      <p className="work-skills">Skills Needed: {work.skillsNeeded.join(', ')}</p>
      <p className="work-volunteers">Volunteers Needed: {work.volunteersNeeded}</p>
      <p className="work-status">Status: {work.status}</p>
    </div>
  );
}

export default VolunteerWorkCard;