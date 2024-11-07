
import React from 'react';
import PropTypes from 'prop-types';

const ChevronLeft = ({ color = "currentColor", size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    {...props}
  >
    
 <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
 
  </svg>
);

ChevronLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

export default ChevronLeft;
  