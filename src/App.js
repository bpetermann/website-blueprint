import React, { useState } from 'react';
import styles from './App.module.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const DUMMY_ARRAY = [1, 2, 3, 4, 5, 6];
const DUMMY_ARRAY_2 = [7, 8, 9, 10, 11, 12];

function App() {
  const [showMenueModal, setShowMenueModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const menueModalToggleHandler = () => {
    setShowMenueModal((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <div className={styles['container']}>
        <Header
          setIsLoggedIn={setIsLoggedIn}
          isLoggedIn={isLoggedIn}
          onClick={menueModalToggleHandler}
          showMenueModal={showMenueModal}
        />
        <Main content={[DUMMY_ARRAY, DUMMY_ARRAY_2]} />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
