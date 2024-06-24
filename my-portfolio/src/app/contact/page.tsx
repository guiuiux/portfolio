"use client"
// app/contact/page.tsx
import React from 'react';
import PortalText from '../../components/PortalText';

const ContactPage = () => {
  return (
    <div className="contact-container">
    <h1>Hover over the text below:</h1>
      <PortalText text="Hover me!" />
    <div>Plain text to check visibility</div>
    </div>
  );
};

export default ContactPage;
