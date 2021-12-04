import React from 'react';
import styles from './Header.module.css';
import Menu from './Menu';

const Header = () => {
  return (
    <div className={styles.Header}>
      <Menu />
    </div>
  );
};

export default Header;
