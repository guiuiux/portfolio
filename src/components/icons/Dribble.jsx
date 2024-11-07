
import React from 'react';
import PropTypes from 'prop-types';

const Dribble = ({ color = "currentColor", size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    {...props}
  >
    
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#fff" stroke-width="1.618" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M19.13 5.08984C15.22 9.13984 10 10.4398 2.25 10.9398" stroke="#fff" stroke-width="1.618" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M21.7501 12.8396C15.1301 11.4296 9.61012 13.8396 5.37012 19.1596" stroke="#fff" stroke-width="1.618" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M8.56006 2.75C12.9301 8.75 14.5601 12.17 16.5601 20.47" stroke="#fff" stroke-width="1.618" stroke-linecap="round" stroke-linejoin="round"></path>

  </svg>
);

Dribble.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

export default Dribble;
  