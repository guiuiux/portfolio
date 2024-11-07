
import React from 'react';
import PropTypes from 'prop-types';

const ChevronRight = ({ color = "currentColor", size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    {...props}
  >
    
 <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
 
  </svg>
);

ChevronRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

export default ChevronRight;
  