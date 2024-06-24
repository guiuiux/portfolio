import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SocialLink.module.css";
import Icon from "./Icon";

interface SocialLinksProps {
  name: string;
  url: string;
}

const SocialLink: React.FC<SocialLinksProps> = ({ name, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.socialLink}
    >
      
        {name}
   
      <Icon
        name="link"
        className={styles.icon}
        width={18}
        height={18}
        customColor
      />
    </a>
  );
};

export default SocialLink;
