
import React from 'react';
import PropTypes from 'prop-types';

const Email = ({ color = "currentColor", size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    {...props}
  >
    
<path d="M13.3335 2.66602H2.66683C1.93045 2.66602 1.3335 3.26297 1.3335 3.99935V11.9993C1.3335 12.7357 1.93045 13.3327 2.66683 13.3327H13.3335C14.0699 13.3327 14.6668 12.7357 14.6668 11.9993V3.99935C14.6668 3.26297 14.0699 2.66602 13.3335 2.66602Z" stroke="#4F46E5" stroke-width="1.618" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M14.6668 4.66602L8.68683 8.46602C8.48101 8.59497 8.24304 8.66336 8.00016 8.66336C7.75728 8.66336 7.51931 8.59497 7.3135 8.46602L1.3335 4.66602" stroke="#4F46E5" stroke-width="1.618" stroke-linecap="round" stroke-linejoin="round"></path>

  </svg>
);

Email.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

export default Email;
  