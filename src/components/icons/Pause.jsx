
import React from 'react';
import PropTypes from 'prop-types';

const Pause = ({ color = "currentColor", size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    {...props}
  >
    
<path d="M2 14V2M12 14V2" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>

  </svg>
);

Pause.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

export default Pause;
  