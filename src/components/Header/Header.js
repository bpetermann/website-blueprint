import React, { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
import MenueModal from '../Modal/MenueModal';
import AdBanner from './AdBanner';
import Title from './Title';
import Menue from './Menue';
import FavoritesList from '../Modal/FavoritesList';

const Header = (props) => {
  const favContext = useContext(FavoritesContext);
  return (
    <>
      <AdBanner />
      <Title
        userName={props.userName}
        signInHandler={props.signInHandler}
        signOutHandler={props.signOutHandler}
        isLoggedIn={props.isLoggedIn}
      />
      {props.showMenueModal && (
        <MenueModal
          menueModalToggle={props.menueModalToggle}
          signInHandler={props.signInHandler}
          signOutHandler={props.signOutHandler}
          isLoggedIn={props.isLoggedIn}
        />
      )}
      {favContext.showFavItems && <FavoritesList />}
      <Menue menueModalToggle={props.menueModalToggle} />
    </>
  );
};

export default Header;
