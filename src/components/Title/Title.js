import React, { useContext } from 'react';

import styles from './Title.module.css';
import FavoritesContext from '../../store/favorites-context';

const Title = (props) => {
  const favContext = useContext(FavoritesContext);

  const totalFavItems = favContext.favoriteItems.length;
  return (
    <div className={styles.container}>
      <div className={styles['logo-container']}>
        <span className={styles['logo']}>Blueprint</span>
      </div>
      <div className={styles['account-container']}>
        <button
          onClick={favContext.favoritesToggleHandler}
          className={styles['favorites-list']}
        >
          <img
            src={require('../../images/heart.png')}
            alt={'Wish list'}
            className={styles.image}
          />
          <span className={styles['favorites-counter']}>{totalFavItems}</span>
        </button>
      </div>
    </div>
  );
};

export default Title;
