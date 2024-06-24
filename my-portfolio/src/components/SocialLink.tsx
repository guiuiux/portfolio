import React from 'react'; // Import React
import { motion, AnimatePresence } from 'framer-motion'; // Import animation libraries
import styles from './SocialLink.module.css'; // Import CSS module for styling

// Define the type for the props that the component will receive
interface SocialLinksProps {
  name: string; // Name of the social platform
  url: string;  // URL to the social platform
}

// Declare the component as a functional component and type its props
const SocialLink: React.FC<SocialLinksProps> = ({ name, url }) => {
  return (
    // JSX to define what the component renders
    <a href={url} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
     {name}
    </a>
  );
};

export default SocialLink; // Export the component for use in other parts of the application
