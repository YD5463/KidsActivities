import React from 'react';
import PropTypes from 'prop-types';
import './StyledInput.css'; // Import your CSS file for styling

const StyledInput = ({ type, placeholder, value, onChange, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`styled-input ${className}`} // Apply your custom class and 'styled-input' class
    />
  );
};

StyledInput.propTypes = {
  type: PropTypes.string, // Input type (text, password, email, etc.)
  placeholder: PropTypes.string, // Placeholder text
  value: PropTypes.any, // Input value
  onChange: PropTypes.func, // Change event handler
  className: PropTypes.string, // Additional CSS classes
};

export default StyledInput;
