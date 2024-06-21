"use client";

import React, { useState, useRef } from 'react';
import styles from './NavbarSidebar.module.css';
import Image from 'next/image';
import HamburgerButton from './HamburgerButton';
import '../app/globals.css';

const NavbarSidebar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hamburgerButtonRef = useRef<any>(null);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => {
      const newState = !prevState;
      if (hamburgerButtonRef.current) {
        if (newState) {
          hamburgerButtonRef.current.playSegments([5, 35]);
        } else {
          hamburgerButtonRef.current.playSegments([35, 5]);
        }
      }
      return newState;
    });
  };

  return (
    <div className={styles.navbarSidebar}>
      <div className={styles.rowWrap}>
        <div className={styles.logo}>
          <Image src="/imgs/logo.svg" alt="Logo" width={36} height={36} />
        </div>
        <div className={styles.title}>g. ui/ux</div>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <HamburgerButton ref={hamburgerButtonRef} isOpen={isMenuOpen} />
      </div>
    </div>
  );
};

export default NavbarSidebar;
