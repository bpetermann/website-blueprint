import React, { useState, useContext } from 'react';

import MenueModal from './components/Modal/MenueModal';
import styles from './App.module.css';
import AdBanner from './components/AdBanner/AdBanner';
import Title from './components/Title/Title';
import Menue from './components/Menue/Menue';
import Searchbox from './components/Searchbox/Searchbox';
import Carousel from './components/Carousel/Carousel';
import ImageBox from './components/ImageBox/ImageBox';
import Slideshow from './components/Slideshow/Slideshow';
import FavoritesList from './components/Favorites/FavoritesList';

import FavoritesContext from './store/favorites-context';

const DUMMY_ARRAY = [1, 2, 3, 4, 5, 6];
const DUMMY_ARRAY_2 = [7, 8, 9, 10, 11, 12];
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
      <Carousel content={DUMMY_ARRAY} />
      <Searchbox />
      <ImageBox />
      <Slideshow content={DUMMY_ARRAY_2} />
    </div>
  );
}

export default App;
