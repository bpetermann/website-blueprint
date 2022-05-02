import React, { useContext } from 'react';
import styles from './Title.module.css';
import FavoritesContext from '../../store/favorites-context';
import DarkmodeContext from '../../store/darkmode-context';
import AuthContext from '../../store/auth-context';

const Title = () => {
  const { favoriteItems, favoritesToggleHandler } =
    useContext(FavoritesContext);
  const { darkmode } = useContext(DarkmodeContext);
  const { isLoggedIn, signInHandler, signOutHandler, userName } =
    useContext(AuthContext);
  const totalFavItems = favoriteItems.length;

  return (
    <>
      {userName && (
        <div
          className={`${styles['user-greeting']} ${
            darkmode ? styles.darkmode : ''
          }`}
        >
          <p>Hello, {userName}</p>
        </div>
      )}
      <div className={`${styles.container} ${darkmode ? styles.darkmode : ''}`}>
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
            onClick={favoritesToggleHandler}
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
