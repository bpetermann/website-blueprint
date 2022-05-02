import React, { useContext } from 'react';

import styles from './Searchbox.module.css';
import DarkmodeContext from '../../store/darkmode-context';

const Searchbox = () => {
  const { darkmode } = useContext(DarkmodeContext);
  return (
    <div className={`${styles.container} ${darkmode ? styles.darkmode : ''}`}>
      <div className={styles.searchBackground}>
        <div
          className={`${styles['search-container']} ${
            darkmode ? styles.darkmode : ''
          }`}
        >
          <img
            src={require('../../assets/images/glass.png')}
            alt='Magnifying glass'
            className={styles.glassImage}
          />
          <input
            className={`${styles['search-input']} ${
              darkmode ? styles.darkmode : ''
            }`}
            type='text'
            placeholder='Enter Location'
          />
          <button
            className={`${styles['searchBtn']} ${
              darkmode ? styles.darkbutton : ''
            }`}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchbox;
