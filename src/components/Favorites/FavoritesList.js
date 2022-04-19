import React, { useContext } from 'react';
import styles from './FavoritesList.module.css';
import Backdrop from '../Modal/Backdrop';

import FavoriteItems from './FavoriteItems';

import FavoritesContext from '../../store/favorites-context';

const FavoritesList = (props) => {
  const favContext = useContext(FavoritesContext);
  return (
    <React.Fragment>
      <Backdrop onClose={favContext.favoritesToggleHandler}/>
      <div className={styles.container}>
        <div className={styles.btnContainer}>
          <button
            onClick={favContext.favoritesToggleHandler}
            className={styles.closeWishlistBtn}
          >
            X
          </button>
        </div>
        <FavoriteItems />
      </div>
    </React.Fragment>
  );
};

export default FavoritesList;
