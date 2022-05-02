import React, { useState, useEffect, useContext } from 'react';
import FavoritesContext from './favorites-context';
import { auth, provider, db } from '../firebase/firebase-config';
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

const AuthContext = React.createContext({
  darkmodeToggleHandler: () => {},
});

export const AuthContextProvider = (props) => {
  const { favoriteItems, setFavoriteItems } = useContext(FavoritesContext);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(false);

  const favoritesCollectionRef = collection(db, 'favorites');

  const createFavoritesDoc = async () => {
    await addDoc(favoritesCollectionRef, {
      user: auth.currentUser.displayName,
      id: auth.currentUser.uid,
      favorites: favoriteItems,
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
      setFavoriteItems([...new Set([...favoriteItems, ...favorites[0]])]);
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
      setFavoriteItems([]);
    });
  };

  useEffect(() => {
    if (isLoggedIn) {
      const updateFavorites = async () => {
        const newFavs = { favorites: favoriteItems };
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
  }, [favoriteItems, isLoggedIn]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userName,
        signInHandler,
        signOutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
