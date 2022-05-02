import React, { useContext } from 'react';

import styles from './FavoriteItems.module.css';
import FavoritesContext from '../../store/favorites-context';
import DarkmodeContext from '../../store/darkmode-context';

const FavoriteItems = () => {
  const favContext = useContext(FavoritesContext);
  const darkmodeCtx = useContext(DarkmodeContext);
  return (
    <>
      {favContext.favoriteItems.map((item) => {
        return (
          <div
            className={`${styles.container} ${
              darkmodeCtx.darkmode ? styles.darkmode : ''
            }`}
            key={item}
          >
            <button
              className={styles['wishlist-button']}
              onClick={() => favContext.removeFromFavorites(item)}
            >
              <img
                src={require('../../assets/images/heart-full.png')}
                alt={item.name}
                className={styles['heart-image']}
              />
            </button>
            <span className={styles['content']}>{item}</span>
          </div>
        );
      })}
    </>
  );
};

export default FavoriteItems;
