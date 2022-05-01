import React, { useContext, useEffect, useState } from 'react';

import styles from './Title.module.css';
import FavoritesContext from '../../store/favorites-context';
import DarkmodeContext from '../../store/darkmode-context';

import { auth, provider, db } from '../../firebase/firebase-config';
import { signInWithPopup, signOut } from 'firebase/auth';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  query,
  where,
} from 'firebase/firestore';

const Title = ({ isLoggedIn, setIsLoggedIn }) => {
  const favContext = useContext(FavoritesContext);
  const [userName, setUserName] = useState(false);
  const favoritesCollectionRef = collection(db, 'favorites');
  const darkmodeCtx = useContext(DarkmodeContext);

  const createFavoritesDoc = async () => {
    await addDoc(favoritesCollectionRef, {
      user: auth.currentUser.displayName,
      id: auth.currentUser.uid,
      favorites: favContext.favoriteItems,
    });
  };

  const getFavorites = async () => {
    const userRef = query(
      collection(db, 'favorites'),
      where('id', '==', auth.currentUser.uid)
    );
    const data = await getDocs(userRef);
    const favorites = data.docs.map((doc) => doc.data().favorites);
    setIsLoggedIn(true);
    if (favorites[0] !== undefined) {
      favContext.setFavoriteItems([...favorites[0]]);
      setIsLoggedIn(true);
    } else {
      createFavoritesDoc();
      setIsLoggedIn(true);
    }
  };

  const signInHandler = () => {
    signInWithPopup(auth, provider).then((result) => {
      setUserName(auth.currentUser.displayName);
      getFavorites();
    });
  };

  const signOutHandler = () => {
    signOut(auth).then(() => {
      setIsLoggedIn(false);
      setUserName(false);
    });
  };

  useEffect(() => {
    if (isLoggedIn) {
      const updateFavorites = async () => {
        const newFavs = { favorites: favContext.favoriteItems };
        const userRef = query(
          collection(db, 'favorites'),
          where('id', '==', auth.currentUser.uid)
        );
        const findUsers = await getDocs(userRef);
        findUsers.forEach(async (user) => {
          const getUser = doc(db, 'favorites', user.id);
          await updateDoc(getUser, newFavs);
        });
      };
      updateFavorites();
    }
  }, [favContext.favoriteItems, isLoggedIn]);

  const totalFavItems = favContext.favoriteItems.length;

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Title;
