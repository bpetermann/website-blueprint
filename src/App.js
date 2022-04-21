import React, { useState, useContext } from 'react';

import MenueModal from './components/Modal/MenueModal';
import styles from './App.module.css';
import AdBanner from './components/AdBanner';
import Title from './components/Title';
import Menue from './components/Menue';
import Searchbox from './components/Searchbox';
import Carousel from './components/Carousel/Carousel';
import Slideshow from './components/Slideshow/Slideshow';
import FavoritesList from './components/Favorites/FavoritesList';

import FavoritesContext from './store/favorites-context';

const DUMMY_ARRAY = [1, 2, 3, 4, 5, 6];

function App() {
  const [showMenueModal, setShowMenueModal] = useState(false);
  const favContext = useContext(FavoritesContext);

  const menueModalToggleHandler = () => {
    setShowMenueModal((prevState) => !prevState);
  };

  return (
    <div className={styles.container}>
      {showMenueModal && <MenueModal onClick={menueModalToggleHandler} />}
      <AdBanner />
      <Title />
      {favContext.showFavItems && <FavoritesList />}
      <Menue onClick={menueModalToggleHandler} />
      <Carousel  content={DUMMY_ARRAY}/>
      <Searchbox />
      <Slideshow content={DUMMY_ARRAY} />
    </div>
  );
}

export default App;
