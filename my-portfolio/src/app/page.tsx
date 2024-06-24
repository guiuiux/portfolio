'use client'

import React, { useEffect } from 'react';
import styles from '../styles/index.module.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ProjectCard from '../components/ProjectCard';
import SocialLink from '../components/SocialLink'


export default function Home() {


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
        <div className={styles.viewAll}> 
 + view all projects
          </div>
          <div className={styles.socialLinks}> 
          <SocialLink name="Dribbble" url={'https://dribbble.com/eyeliketomoveit'} />
          <SocialLink name="Behance" url={'https://www.behance.net/guipinheeiro'} />
          <SocialLink name="Instagram" url={'https://www.instagram.com/eyeliketomoveit/'} />
          <SocialLink name="LinkedIn" url={'https://www.linkedin.com/in/guilherme-pinheiro-ferreira-82568b57/'} />
          </div>
      </main>
    </div>
  );
}
