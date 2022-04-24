import React, { useContext, useState } from 'react';

import styles from './Title.module.css';
import FavoritesContext from '../../store/favorites-context';

import { auth, provider } from '../firebase/firebase-config';
import { signInWithPopup } from 'firebase/auth';

const Title = (props) => {
  const favContext = useContext(FavoritesContext);
  const [userName, setUserName] = useState(false);

  const signInHandler = () => {
    signInWithPopup(auth, provider).then((result) => {
      props.setIsLoggedIn(true);
      setUserName(result._tokenResponse.firstName);
      console.log(result._tokenResponse);
    });
  };

  const totalFavItems = favContext.favoriteItems.length;
  return (
    <div className={styles.container}>
      <div className={styles['logo-container']}>
        <span className={styles['logo']}>Blueprint</span>
      </div>
      {userName && (
        <div className={styles['user-greeting']}>
          <p>Hello, {userName}</p>
        </div>
      )}
      <div className={styles['account-container']}>
        <button className={styles['login']} onClick={signInHandler}>
          Login
        </button>
        <button
          onClick={favContext.favoritesToggleHandler}
          className={styles['favorites-list']}
        >
          <img
            src={require('../../images/heart.png')}
            alt={'Favorites button'}
            className={styles.image}
          />
          <span className={styles['favorites-counter']}>{totalFavItems}</span>
        </button>
      </div>
    </div>
  );
};

export default Title;
