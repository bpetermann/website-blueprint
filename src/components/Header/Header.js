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
    <React.Fragment>
      <AdBanner />
      <Title
        setIsLoggedIn={props.setIsLoggedIn}
        isLoggedIn={props.isLoggedIn}
      />
      {props.showMenueModal && <MenueModal onClick={props.onClick} />}
      {favContext.showFavItems && <FavoritesList />}
      <Menue onClick={props.onClick} />
    </React.Fragment>
  );
};

export default Header;
