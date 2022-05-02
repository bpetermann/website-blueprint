import React, { useContext } from 'react';
import styles from './MenueModal.module.css';
import Backdrop from './Backdrop';
import DarkmodeContext from '../../store/darkmode-context';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AuthContext from '../../store/auth-context';

const MenueModal = ({ menueModalToggle }) => {
  const { darkmode, darkmodeToggleHandler } = useContext(DarkmodeContext);
  const { isLoggedIn, signInHandler, signOutHandler } = useContext(AuthContext);

  return (
    <>
      <Backdrop onClose={menueModalToggle} />
      <div className={`${styles.container} ${darkmode ? styles.darkmode : ''}`}>
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
        {darkmode ? (
          <button
            className={styles['darkmode-toggle-button']}
            onClick={darkmodeToggleHandler}
          >
            Lightmode <LightModeIcon />
          </button>
        ) : (
          <button
            className={styles['darkmode-toggle-button']}
            onClick={darkmodeToggleHandler}
          >
            Darkmode <DarkModeIcon />
          </button>
        )}
      </div>
    </>
  );
};

export default MenueModal;
