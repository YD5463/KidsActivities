import React from 'react';
import VolunteerWorkCard from './VolunteerWorkCard';
import './VolunteerWorkList.css';

function VolunteerWorkList({ volunteerWorks }) {
  return (
    <>
          <h2>Volunteer Work Opportunities</h2>
          <div className="volunteer-work-list">
      {volunteerWorks.map((work, index) => (
        <VolunteerWorkCard key={index} work={work} />
      ))}
    </div>
    </>
  );
}

export default VolunteerWorkList;
