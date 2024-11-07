
import React from 'react';
import PropTypes from 'prop-types';

const Play = ({ color = "currentColor", size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    {...props}
  >
    
<path d="M0 2.98951C0 2.01835 -1.49012e-07 1.53277 0.20249 1.2651C0.37889 1.03191 0.64852 0.887609 0.9404 0.870179C1.27544 0.850169 1.67946 1.11953 2.48752 1.65823L13.0031 8.6686C13.6708 9.1137 14.0046 9.3363 14.1209 9.6168C14.2227 9.8621 14.2227 10.1377 14.1209 10.383C14.0046 10.6635 13.6708 10.886 13.0031 11.3312L2.48752 18.3415C1.67946 18.8802 1.27544 19.1496 0.9404 19.1296C0.64852 19.1122 0.37889 18.9679 0.20249 18.7347C-1.49012e-07 18.467 0 17.9814 0 17.0103V2.98951Z"></path>

  </svg>
);

Play.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

export default Play;
  