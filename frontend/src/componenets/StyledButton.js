import React from 'react';
import PropTypes from 'prop-types';
import './StyledButton.css';

const StyledButton = ({ onClick, className, children }) => {
  return (
    <button onClick={onClick} className={`styled-button ${className}`}>
      {children}
    </button>
  );
};

StyledButton.propTypes = {
  onClick: PropTypes.func.isRequired, // Click event handler
  className: PropTypes.string, // Additional CSS classes
  children: PropTypes.node, // Button content
};

export default StyledButton;
