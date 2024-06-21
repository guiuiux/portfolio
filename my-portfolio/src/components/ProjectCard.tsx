'use client'

import React, { useRef } from 'react';
import Image from 'next/image';
import styles from './ProjectCard.module.css';
import '../app/globals.css';

export interface ProjectCardProps {
  title: string;
  year: string;
  imageUrl: string;
  videoUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, year, imageUrl, videoUrl }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset video to start
    }
  };

  return (
    <div className={styles.projectCard} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="smoothCorners100" clipPathUnits="objectBoundingBox">
            <path d="M0 0.225C0 0.119 0 0.066 0.033 0.033C0.066 0 0.119 0 0.225 0H0.775C0.881 0 0.934 0 0.967 0.033C1 0.066 1 0.119 1 0.225V0.775C1 0.881 1 0.934 0.967 0.967C0.934 1 0.881 1 0.775 1H0.225C0.119 1 0.066 1 0.033 0.967C0 0.934 0 0.881 0 0.775V0.225Z"/>
          </clipPath>
        </defs>
      </svg>
      <div className={`${styles.projectCardMedia} smooth-corner`}>
        <Image src={imageUrl} alt={title} fill className={styles.projectCardImage} />
        <video ref={videoRef} src={videoUrl} className={styles.projectCardVideo} muted loop />
      </div>
      <div className={styles.projectCardContent}>
        <div className={styles.projectCardTitle}>
          <span className={styles.projectCardHyphen}></span>
          <h2>{title}</h2>
        </div>
        <span className={styles.projectCardYear}>{year}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
