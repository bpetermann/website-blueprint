import React, { useContext } from 'react';
import styles from './FavoritesList.module.css';
import Backdrop from '../Modal/Backdrop';

import FavoriteItems from './FavoriteItems';

import FavoritesContext from '../../store/favorites-context';
import DarkmodeContext from '../../store/darkmode-context';

const FavoritesList = () => {
  const favContext = useContext(FavoritesContext);
  const darkmodeCtx = useContext(DarkmodeContext);
  return (
    <>
      <Backdrop onClose={favContext.favoritesToggleHandler} />
      <div
        className={`${styles.container} ${
          darkmodeCtx.darkmode ? styles.darkmode : ''
        }`}
      >
        <div className={styles['button-container']}>
          <button
            onClick={favContext.favoritesToggleHandler}
            className={styles['close-favoritesList-button']}
          >
            X
          </button>
        </div>
        <FavoriteItems />
      </div>
    </>
  );
};

export default FavoritesList;
