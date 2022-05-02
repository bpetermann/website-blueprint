import React, { useContext } from 'react';
import styles from './Menue.module.css';
import DarkmodeContext from '../../store/darkmode-context';

const Menue = ({ menueModalToggle }) => {
  const { darkmode } = useContext(DarkmodeContext);
  return (
    <div className={`${styles.container} ${darkmode ? styles.darkmode : ''}`}>
      <button
        className={`${styles['toggle-button']} ${
          darkmode ? styles.darkmode : ''
        }`}
        onClick={menueModalToggle}
      >
        <span className={styles['toggle-button-bar']}></span>
        <span className={styles['toggle-button-bar']}></span>
        <span className={styles['toggle-button-bar']}></span>
      </button>
      <input
        className={`${styles['search-input']} ${
          darkmode ? styles.darkmode : ''
        }`}
        type='text'
        placeholder='Search'
      />
    </div>
  );
};

export default Menue;
