import React, { useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { AuthContextProvider } from './store/auth-context';

function App() {
  const [showMenueModal, setShowMenueModal] = useState(false);

  const menueModalToggleHandler = () => {
    setShowMenueModal((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles['container']}>
        <AuthContextProvider>
          <Header
            showMenueModal={showMenueModal}
            menueModalToggle={menueModalToggleHandler}
          />
        </AuthContextProvider>
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
