import React, { useContext } from 'react';

import styles from './CarouselItem.module.css';
import FavoritesContext from '../../store/favorites-context';
import DarkmodeContext from '../../store/darkmode-context';

const CarouselItem = (props) => {
  const favContext = useContext(FavoritesContext);
  const darkmodeCtx = useContext(DarkmodeContext);
  return (
    <React.Fragment>
      {props.content.map((item) => {
        return (
          <div
            className={`${styles.card} ${
              darkmodeCtx.darkmode ? styles.darkmode : ''
            }`}
            key={item}
          >
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

export default CarouselItem;
