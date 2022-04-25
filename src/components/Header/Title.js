import React, { useContext, useEffect, useState } from 'react';

import styles from './Title.module.css';
import FavoritesContext from '../../store/favorites-context';

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

const Title = (props) => {
  const favContext = useContext(FavoritesContext);
  const [userName, setUserName] = useState(false);
  const [favoritesListExist, setFavoritesListExist] = useState(false);

  const favoritesCollectionRef = collection(db, 'favorites');

  const getFavorites = async () => {
    const data = await getDocs(favoritesCollectionRef);
    const favorites = data.docs.map((doc) => doc.data().favorites);
    if (favorites[0] !== undefined) {
      favContext.setFavoriteItems([...favorites[0]]);
      setFavoritesListExist(true);
      props.setIsLoggedIn(true);
    } else {
      props.setIsLoggedIn(true);
      return;
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
      props.setIsLoggedIn(false);
      setUserName(false);
    });
  };

  useEffect(() => {
    if (props.isLoggedIn) {
      if (favoritesListExist) {
        console.log('updateFavorites is running');
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
      } else {
        console.log('saveFavorites is running');
        const saveFavorites = async () => {
          await addDoc(favoritesCollectionRef, {
            user: auth.currentUser.displayName,
            id: auth.currentUser.uid,
            favorites: favContext.favoriteItems,
          });
        };
        saveFavorites();
        setFavoritesListExist(true);
      }
    }
  }, [
    favContext.favoriteItems,
    favoritesListExist,
    favoritesCollectionRef,
    props.isLoggedIn,
  ]);

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
        {props.isLoggedIn ? (
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
            src={require('../../Assets/images/heart.png')}
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
