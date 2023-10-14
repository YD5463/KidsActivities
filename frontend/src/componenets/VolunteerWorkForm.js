import React, { useState } from 'react';
import StyledButton from './StyledButton';
import StyledInput from './StyledInput';

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
        <StyledInput
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <StyledInput
          type="text"
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
        <StyledInput
          type="text"
          placeholder="Location"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        />
        <StyledInput
          type="text"
          placeholder="Skills Needed (comma-separated)"
          value={formData.skillsNeeded}
          onChange={(e) => setFormData({ ...formData, skillsNeeded: e.target.value.split(', ') })}
        />
        <StyledInput
          type="number"
          placeholder="Volunteers Needed"
          value={formData.volunteersNeeded}
          onChange={(e) => setFormData({ ...formData, volunteersNeeded: parseInt(e.target.value) })}
        />
        <StyledButton type="button" onClick={handleFormSubmit}>
          Create Work
        </StyledButton>
      </form>
    </div>
  );
}

export default VolunteerWorkForm;
