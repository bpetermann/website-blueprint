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
import Footer from './components/Footer/Footer';
import FavoritesContext from './store/favorites-context';

const DUMMY_ARRAY = [1, 2, 3, 4, 5, 6];
const DUMMY_ARRAY_2 = [7, 8, 9, 10, 11, 12];

function App() {
  const [showMenueModal, setShowMenueModal] = useState(false);
  const favContext = useContext(FavoritesContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log(isLoggedIn);

  const menueModalToggleHandler = () => {
    setShowMenueModal((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <div className={styles.container}>
        {showMenueModal && <MenueModal onClick={menueModalToggleHandler} />}
        <AdBanner />
        <Title setIsLoggedIn={setIsLoggedIn} />
        {favContext.showFavItems && <FavoritesList />}
        <Menue onClick={menueModalToggleHandler} />
        <Slideshow content={DUMMY_ARRAY} />
        <Searchbox />
        <ImageBox />
        <Carousel content={DUMMY_ARRAY_2} />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
