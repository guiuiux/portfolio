"use client";

import React from 'react';
import meta from './meta';

const PiecePage = () => {
  return (
    <div>
      <h1>{meta.title}</h1>
      <p>Project Date: {meta.date}</p>
      <p>Tags: {meta.tags.join(', ')}</p>
      <p>Tools: {meta.tools.join(', ')}</p>
      {/* More content here */}
    </div>
  );
};

export default PiecePage;
