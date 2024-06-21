import React from 'react';
import styles from '../styles/index.module.css';
import NavbarSidebar from '../components/NavbarSidebar';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <div className={styles.container}>
      <NavbarSidebar />
      <main className={styles.main}>
        <ProjectCard
          title="Nylo"
          year="2024"
          imageUrl="/pieces/work/nylo/thumb.png"
          videoUrl="/pieces/work/nylo/video.webm"

        />

          <ProjectCard
          title="Livro Digital"
          year="2024"
          imageUrl="/pieces/work/nylo/thumb.png"
          videoUrl="/pieces/work/nylo/video.webm"

        />
      </main>
    </div>
  );
}
