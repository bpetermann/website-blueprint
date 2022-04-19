import React, { useContext } from 'react';

import styles from './SlideshowItem.module.css';
import FavoritesContext from '../../store/favorites-context';

const SlideshowItem = (props) => {
  const favContext = useContext(FavoritesContext);
  return (
    <React.Fragment>
      {props.content.map((item) => {
        return (
          <div className={styles['content-container']} key={item}>
            {favContext.favoriteItems.includes(item) ? (
              <button
                className={styles['wishlist-button']}
                onClick={() => favContext.removeFromFavorites(item)}
              >
                <img
                  src={require('../../images/heart-full.png')}
                  alt={'Add Item to your Wishlist'}
                  className={`${styles['heart-image']} ${styles.bump}`}
                />
              </button>
            ) : (
              <button
                className={styles['wishlist-button']}
                onClick={() => favContext.addToFavorites(item)}
              >
                <img
                  src={require('../../images/heart.png')}
                  alt={'Add Item to your Wishlist'}
                  className={styles['heart-image']}
                />
              </button>
            )}

            {item}
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default SlideshowItem;
