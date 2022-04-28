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
                className={styles['favorites-button']}
                onClick={() => favContext.removeFromFavorites(item)}
              >
                <img
                  src={require('../../assets/images/heart-full.png')}
                  alt={'Remove Item to your Favorites'}
                  className={`${styles['heart-image']} ${styles.bump}`}
                />
              </button>
            ) : (
              <button
                className={styles['favorites-button']}
                onClick={() => favContext.addToFavorites(item)}
              >
                <img
                  src={require('../../assets/images/heart.png')}
                  alt={'Add Item to your Favorites'}
                  className={styles['heart-image']}
                />
              </button>
            )}

            <span className={styles.content}>{item}</span>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default SlideshowItem;
