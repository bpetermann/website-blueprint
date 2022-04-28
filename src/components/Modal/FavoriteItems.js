import React, { useContext } from 'react';

import styles from './FavoriteItems.module.css';
import FavoritesContext from '../../store/favorites-context';

const FavoriteItems = () => {
  const favContext = useContext(FavoritesContext);
  return (
    <React.Fragment>
      {favContext.favoriteItems.map((item) => {
        return (
          <div className={styles.container} key={item}>
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
    </React.Fragment>
  );
};

export default FavoriteItems;
