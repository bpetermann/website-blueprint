import React, { useContext } from 'react';
import styles from './FavoriteItems.module.css';
import FavoritesContext from '../../store/favorites-context';
import DarkmodeContext from '../../store/darkmode-context';

const FavoriteItems = () => {
  const { favoriteItems, removeFromFavorites } = useContext(FavoritesContext);
  const { darkmode } = useContext(DarkmodeContext);
  return (
    <>
      {favoriteItems.map((item) => {
        return (
          <div
            className={`${styles.container} ${darkmode ? styles.darkmode : ''}`}
            key={item}
          >
            <button
              className={styles['wishlist-button']}
              onClick={() => removeFromFavorites(item)}
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
