import React, { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
import MenueModal from '../Modal/MenueModal';
import AdBanner from './AdBanner';
import Title from './Title';
import Menue from './Menue';
import FavoritesList from '../Modal/FavoritesList';

const Header = ({ showMenueModal, menueModalToggle }) => {
  const { showFavItems } = useContext(FavoritesContext);
  return (
    <>
      <AdBanner />
      <Title />
      {showMenueModal && <MenueModal menueModalToggle={menueModalToggle} />}
      {showFavItems && <FavoritesList />}
      <Menue menueModalToggle={menueModalToggle} />
    </>
  );
};

export default Header;
