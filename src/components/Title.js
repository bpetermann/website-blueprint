import React from 'react';

import styles from './Title.module.css';

const Title = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles['logo-container']}>
        <span className={styles['logo']}>Blueprint</span>
      </div>
      <div className={styles['account-container']}>
        <button className={styles['wish-list']}>
          <img
            src={require('../images/heart.png')}
            alt={'Wish list'}
            className={styles.image}
          />
          <span className={styles['wishlist-counter']}>0</span>
        </button>
      </div>
    </div>
  );
};

export default Title;
