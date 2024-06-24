'use client'

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';
import AnimatedIcon from './AnimatedIcon';
import hamburgerAnimation from '../../public/lottie/hamburger-close.json'; // Ensure the correct import path
import Icon from './Icon';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [menuOpen]);

  const variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
    exit: { opacity: 0 }
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.rowWrap}>
          <Icon name="logo" className={styles.logo} />
          <div className={styles.title}>
            <span className={styles.smart}>
              <span className={styles.gui}>g. ui</span>/ux
            </span>
          </div>
        </div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <AnimatedIcon
            animationData={hamburgerAnimation}
            initialFrame={5}
            playFrames={[5, 35]}
            clickToggle={true}
            size="small"
          />
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={`${styles.menuOverlay} ${menuOpen ? styles.show : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={styles.menu}>
              <ul className={styles.menuList}>
                {['Home', 'Work', 'Experimental', 'About', 'Contact'].map((item, i) => (
                  <motion.li
                    key={item}
                    className={styles.menuItem}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={variants}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
