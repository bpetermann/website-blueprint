import React, { useContext } from 'react';
import styles from './Menue.module.css';
import DarkmodeContext from '../../store/darkmode-context';

const Menue = (props) => {
  const darkmodeCtx = useContext(DarkmodeContext);
  return (
    <div  className={`${styles.container} ${
      darkmodeCtx.darkmode ? styles.darkmode : ''
    }`}>
      <button
        className={`${styles['toggle-button']} ${
          darkmodeCtx.darkmode ? styles.darkmode : ''
        }`}
        onClick={props.onClick}
      >
        <span className={styles['toggle-button-bar']}></span>
        <span className={styles['toggle-button-bar']}></span>
        <span className={styles['toggle-button-bar']}></span>
      </button>
      <input
        className={`${styles['search-input']} ${
          darkmodeCtx.darkmode ? styles.darkmode : ''
        }`}
        type='text'
        placeholder='Search'
      />
    </div>
  );
};

export default Menue;
