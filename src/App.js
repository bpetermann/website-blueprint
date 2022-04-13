import React, { useState } from 'react';

import MenueModal from './components/Modal/MenueModal';
import styles from './App.module.css';
import AdBanner from './components/AdBanner';
import Title from './components/Title';
import Menue from './components/Menue';

import Slideshow from './components/Slideshow';

const DUMMY_ARRAY = [1, 2, 3, 4, 5, 6];

function App() {
  const [showMenueModal, setShowMenueModal] = useState(false);

  const menueModalToggleHandler = () => {
    setShowMenueModal((prevState) => !prevState);
  };

  return (
    <div className={styles.container}>
      {showMenueModal && <MenueModal onClick={menueModalToggleHandler} />}
      <AdBanner />
      <Title />
      <Menue onClick={menueModalToggleHandler} />
      <Slideshow content={DUMMY_ARRAY} />
    </div>
  );
}

export default App;
