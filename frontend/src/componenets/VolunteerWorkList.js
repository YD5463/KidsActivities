import React from 'react';
import VolunteerWorkCard from './VolunteerWorkCard';

function VolunteerWorkList({ volunteerWorks }) {
  return (
    <div className="volunteer-work-list">
      <h2>Volunteer Work Opportunities</h2>
      {volunteerWorks.map((work, index) => (
        <VolunteerWorkCard key={index} work={work} />
      ))}
    </div>
  );
}

export default VolunteerWorkList;
