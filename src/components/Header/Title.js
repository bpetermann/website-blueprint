import React, { useContext } from 'react';

import styles from './Title.module.css';
import FavoritesContext from '../../store/favorites-context';
import DarkmodeContext from '../../store/darkmode-context';

const Title = ({ signInHandler, signOutHandler, isLoggedIn, userName }) => {
  const favContext = useContext(FavoritesContext);
  const darkmodeCtx = useContext(DarkmodeContext);
  const totalFavItems = favContext.favoriteItems.length;

  return (
    <>
      {userName && (
        <div
          className={`${styles['user-greeting']} ${
            darkmodeCtx.darkmode ? styles.darkmode : ''
          }`}
        >
          <p>Hello, {userName}</p>
        </div>
      )}
      <div
        className={`${styles.container} ${
          darkmodeCtx.darkmode ? styles.darkmode : ''
        }`}
      >
        <div className={styles['logo-container']}>
          <span className={styles['logo']}>Blueprint</span>
        </div>

        <div className={styles['account-container']}>
          {isLoggedIn ? (
            <button className={styles['logout']} onClick={signOutHandler}>
              Logout
            </button>
          ) : (
            <button className={styles['login']} onClick={signInHandler}>
              Login
            </button>
          )}
          <button
            onClick={favContext.favoritesToggleHandler}
            className={styles['favorites-list']}
          >
            <img
              src={require('../../assets/images/heart.png')}
              alt={'Favorites button'}
              className={styles.image}
            />
            <span className={styles['favorites-counter']}>{totalFavItems}</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Title;
