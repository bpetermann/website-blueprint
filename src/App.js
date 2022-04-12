import React, { useState } from 'react';

import styles from './App.module.css';
import AdBanner from './components/AdBanner';
import Menue from './components/Menue';
import MenueModal from './components/Modal/MenueModal';
import Title from './components/Title';

function App() {
  const [showMenueModal, setShowMenueModal] = useState(false);

  const menueModalToggleHandler = () => {
    console.log('click');
    setShowMenueModal((prevState) => !prevState);
  };

  return (
    <div className={styles.container}>
      {showMenueModal && <MenueModal onClick={menueModalToggleHandler}/>}
      <AdBanner />
      <Title />
      <Menue onClick={menueModalToggleHandler} />
    </div>
  );
}

export default App;
