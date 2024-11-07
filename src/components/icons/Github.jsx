
import React from 'react';
import PropTypes from 'prop-types';

const Github = ({ color = "currentColor", size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    {...props}
  >
    
<path d="M15.0003 22V18C15.1394 16.7473 14.7802 15.4901 14.0003 14.5C17.0003 14.5 20.0003 12.5 20.0003 9C20.0803 7.75 19.7303 6.52 19.0003 5.5C19.2803 4.35 19.2803 3.15 19.0003 2C19.0003 2 18.0003 2 16.0003 3.5C13.3603 3 10.6403 3 8.00028 3.5C6.00028 2 5.00028 2 5.00028 2C4.70028 3.15 4.70028 4.35 5.00028 5.5C4.27215 6.51588 3.91875 7.75279 4.00028 9C4.00028 12.5 7.00028 14.5 10.0003 14.5C9.61028 14.99 9.32028 15.55 9.15028 16.15C8.98028 16.75 8.93028 17.38 9.00028 18V22" stroke="#fff" stroke-width="1.618" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M9 18C4.49 20 4 16 2 16" stroke="#fff" stroke-width="1.618" stroke-linecap="round" stroke-linejoin="round"></path>

  </svg>
);

Github.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

export default Github;
  