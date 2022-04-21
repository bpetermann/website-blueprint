import React, { useState } from 'react';

const FavoritesContext = React.createContext({
  favoriteItems: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
});

export const FavoritesContextProvider = (props) => {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [showFavItems, setshowFavItems] = useState(false);

  const addToFavsHandler = (shopItem) => {
    setFavoriteItems(favoriteItems.concat(shopItem));
  };

  const removeFromFavsHandler = (favItem) => {
    setFavoriteItems(favoriteItems.filter((item) => item !== favItem));
  };

  const favoritesToggleHandler = (origin) => {
    setshowFavItems((prevState) => !prevState);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favoriteItems: favoriteItems,
        showFavItems: showFavItems,
        addToFavorites: addToFavsHandler,
        removeFromFavorites: removeFromFavsHandler,
        favoritesToggleHandler: favoritesToggleHandler,
      }}
    >
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
