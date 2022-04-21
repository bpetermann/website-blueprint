import React from 'react';
import styles from './Menue.module.css';

const Menue = (props) => {
  return (
    <div className={styles.container}>
      <button className={styles['toggle-button']} onClick={props.onClick}>
        <span className={styles['toggle-button-bar']}></span>
        <span className={styles['toggle-button-bar']}></span>
        <span className={styles['toggle-button-bar']}></span>
      </button>
      <input
        className={styles['search-input']}
        type='text'
        placeholder='Search'
      />
    </div>
  );
};

export default Menue;
