import React, { useContext } from 'react';
import styles from './CarouselItem.module.css';
import FavoritesContext from '../../store/favorites-context';
import DarkmodeContext from '../../store/darkmode-context';
import { DUMMY_ARRAY_2 } from '../../data/DummyContent';

const CarouselItem = () => {
  const { favoriteItems, removeFromFavorites, addToFavorites } =
    useContext(FavoritesContext);
  const { darkmode } = useContext(DarkmodeContext);
  return (
    <>
      {DUMMY_ARRAY_2.map((item) => {
        return (
          <div
            className={`${styles.card} ${darkmode ? styles.darkmode : ''}`}
            key={item}
          >
            {favoriteItems.includes(item) ? (
              <button
                className={styles['favorites-button']}
                onClick={() => removeFromFavorites(item)}
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
                onClick={() => addToFavorites(item)}
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
    </>
  );
};

export default CarouselItem;
