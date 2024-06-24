import React from 'react';
import styles from './Sidebar.module.css';
import Icon from './Icon';

const Sidebar: React.FC = () => {
  return (
    <div id="sidebar" className={styles.sidebar}>
      <div className={styles.logoWrapper}>
        <Icon name="logo" className={styles.logo} />
        <div className={styles.title}>
          <span className={styles.smart}>
            <span className={styles.gui}>g. ui</span>/ux
          </span>
        </div>
      </div>
      <div className={styles.menu}>
        <ul className={styles.menuList}>
          {['Home', 'Work', 'Experimental', 'About', 'Contact'].map(item => (
            <li key={item} className={styles.menuItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.social}></div>
    </div>
  );
};

export default Sidebar;
