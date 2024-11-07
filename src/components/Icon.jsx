
  import React from 'react';
  
  // Dynamically import all SVGs as React components
  const icons = import.meta.glob('../assets/icons/*.svg', { eager: true, import: 'ReactComponent' });
  
  export const Icon = ({ name, ...props }) => {
    const SvgIcon = icons[`../assets/icons/${name}.svg`];
    return SvgIcon ? <SvgIcon {...props} /> : null;
  };
  
  export default Icon;
    