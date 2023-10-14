import React, { useState } from 'react';

function VolunteerWorkForm({ setVolunteerWorks }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location: '',
    skillsNeeded: '',
    volunteersNeeded: 0,
    status: 'Open',
  });

  const handleFormSubmit = () => {
    setVolunteerWorks((prevWorks) => [...prevWorks, formData]);
    setFormData({
      name: '',
      description: '',
      location: '',
      skillsNeeded: '',
      volunteersNeeded: 0,
      status: 'Open',
    });
  };

  return (
    <div className="volunteer-work-form">
      <h2>Create New Volunteer Work</h2>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        />
        <input
          type="text"
          placeholder="Skills Needed (comma-separated)"
          value={formData.skillsNeeded}
          onChange={(e) => setFormData({ ...formData, skillsNeeded: e.target.value.split(', ') })}
        />
        <input
          type="number"
          placeholder="Volunteers Needed"
          value={formData.volunteersNeeded}
          onChange={(e) => setFormData({ ...formData, volunteersNeeded: parseInt(e.target.value) })}
        />
        <button type="button" onClick={handleFormSubmit}>
          Create Work
        </button>
      </form>
    </div>
  );
}

export default VolunteerWorkForm;
