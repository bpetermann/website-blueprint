import React, { useContext } from 'react';
import styles from './AdBanner.module.css';
import DarkmodeContext from '../../store/darkmode-context';

const AdBanner = () => {
  const { darkmode } = useContext(DarkmodeContext);

  return (
    <div className={`${styles.container} ${darkmode ? styles.darkmode : ''}`}>
      <p>Web Banner</p>
    </div>
  );
};

export default AdBanner;
