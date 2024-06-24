'use client'

import React, { useEffect } from 'react';
import styles from '../styles/index.module.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ProjectCard from '../components/ProjectCard';
import SocialLink from '../components/SocialLink'
import PortalText from '../components/PortalText';

export default function Home() {
  useEffect(() => {
    const setMainMargin = () => {
      const sidebar = document.getElementById('sidebar');
      const main = document.querySelector(`.${styles.main}`);
      if (sidebar && main) {
        main.style.marginLeft = `${sidebar.offsetWidth}px`;
      }
    };

    setMainMargin(); // Set initial margin
    window.addEventListener('resize', setMainMargin); // Adjust margin on window resize
    return () => window.removeEventListener('resize', setMainMargin);
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      <Sidebar />
      <main className={styles.main}>
        <div className={styles.case_studies}>
          {Array.from({ length: 4 }).map((_, i) => (
            <ProjectCard
              key={i}
              title="Nylo"
              year="2024"
              imageUrl="/pieces/work/nylo/thumb.png"
              videoUrl="/pieces/work/nylo/video.webm"
            />
          ))}
          
        </div>
        <div className={styles.portaltext}> 

      <h1>Hover over the text below:</h1>
      <PortalText text="Hover me!" />

          </div>
          <SocialLink name="LinkedIn" url={'https://www.linkedin.com/in/guilherme-pinheiro-ferreira-82568b57/'} />
      </main>
    </div>
  );
}
