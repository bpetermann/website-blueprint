import React, { useContext } from 'react';

import styles from './MenueModal.module.css';
import Backdrop from './Backdrop';
import DarkmodeContext from '../../store/darkmode-context';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const MenueModal = ({
  menueModalToggle,
  signInHandler,
  signOutHandler,
  isLoggedIn,
}) => {
  const darkmodeCtx = useContext(DarkmodeContext);

  return (
    <>
      <Backdrop onClose={menueModalToggle} />
      <div
        className={`${styles.container} ${
          darkmodeCtx.darkmode ? styles.darkmode : ''
        }`}
      >
        <button className={styles['close-button']} onClick={menueModalToggle}>
          X
        </button>
        {isLoggedIn ? (
          <button className={styles['logout-button']} onClick={signOutHandler}>
            Logout
          </button>
        ) : (
          <button className={styles['login-button']} onClick={signInHandler}>
            Login
          </button>
        )}
        {darkmodeCtx.darkmode ? (
          <button
            className={styles['darkmode-toggle-button']}
            onClick={darkmodeCtx.darkmodeToggleHandler}
          >
            Lightmode <LightModeIcon />
          </button>
        ) : (
          <button
            className={styles['darkmode-toggle-button']}
            onClick={darkmodeCtx.darkmodeToggleHandler}
          >
            Darkmode <DarkModeIcon />
          </button>
        )}
      </div>
    </>
  );
};

export default MenueModal;
