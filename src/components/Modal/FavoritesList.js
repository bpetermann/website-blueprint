import React, { useContext } from 'react';
import styles from './FavoritesList.module.css';
import Backdrop from '../Modal/Backdrop';

import FavoriteItems from './FavoriteItems';

import FavoritesContext from '../../store/favorites-context';
import DarkmodeContext from '../../store/darkmode-context';

const FavoritesList = () => {
  const { favoritesToggleHandler } = useContext(FavoritesContext);
  const { darkmode } = useContext(DarkmodeContext);
  return (
    <>
      <Backdrop onClose={favoritesToggleHandler} />
      <div className={`${styles.container} ${darkmode ? styles.darkmode : ''}`}>
        <div className={styles['button-container']}>
          <button
            onClick={favoritesToggleHandler}
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
