import React, { useState, useEffect, useContext } from 'react';
import FavoritesContext from './favorites-context';
import { auth, provider, db } from '../firebase/firebase-config';
import { signInWithPopup, signOut } from 'firebase/auth';
import { updateDoc, getDoc, setDoc, doc } from 'firebase/firestore';

const AuthContext = React.createContext();

export const AuthContextProvider = (props) => {
  const { favoriteItems, setFavoriteItems } = useContext(FavoritesContext);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(false);

  const createFavoritesDoc = async () => {
    await setDoc(doc(db, 'favorites', auth.currentUser.uid), {
      user: auth.currentUser.displayName,
      favorites: favoriteItems,
    });
  };

  const getFavorites = async () => {
    const userRef = doc(db, 'favorites', auth.currentUser.uid);
    const data = await getDoc(userRef);

    if (data.exists()) {
      const favorites = data.data().favorites;
      setFavoriteItems([...new Set([...favoriteItems, ...favorites])]);
      setIsLoggedIn(true);
    } else {
      createFavoritesDoc();
      setIsLoggedIn(true);
    }
    setIsLoggedIn(true);
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
        const getUser = doc(db, 'favorites', auth.currentUser.uid);
        await updateDoc(getUser, newFavs);
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
