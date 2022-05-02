import React, { useState, useEffect, useContext } from 'react';
import styles from './App.module.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import FavoritesContext from './store/favorites-context';

import { auth, provider, db } from './firebase/firebase-config';
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

const DUMMY_ARRAY = [1, 2, 3, 4, 5, 6];
const DUMMY_ARRAY_2 = [7, 8, 9, 10, 11, 12];

function App() {
  const [showMenueModal, setShowMenueModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(false);
  const favContext = useContext(FavoritesContext);
  const favoritesCollectionRef = collection(db, 'favorites');

  const menueModalToggleHandler = () => {
    setShowMenueModal((prevState) => !prevState);
  };

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
      favContext.setFavoriteItems([
        ...new Set([...favContext.favoriteItems, ...favorites[0]]),
      ]);
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
      favContext.setFavoriteItems([]);
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

  return (
    <>
      <div className={styles['container']}>
        <Header
          showMenueModal={showMenueModal}
          menueModalToggle={menueModalToggleHandler}
          isLoggedIn={isLoggedIn}
          userName={userName}
          signInHandler={signInHandler}
          signOutHandler={signOutHandler}
        />
        <Main content={[DUMMY_ARRAY, DUMMY_ARRAY_2]} />
      </div>
      <Footer />
    </>
  );
}

export default App;
