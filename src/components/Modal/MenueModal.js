import React, { useContext } from 'react';

import styles from './MenueModal.module.css';
import Backdrop from './Backdrop';
import DarkmodeContext from '../../store/darkmode-context';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const MenueModal = (props) => {
  const darkmodeCtx = useContext(DarkmodeContext);

  return (
    <React.Fragment>
      <Backdrop onClose={props.onClick} />
      <div className={styles.container}>
        <button className={styles['close-button']} onClick={props.onClick}>
          X
        </button>
        <button className={styles['login-button']}>Login</button>
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

        <span>Headline 1</span>
        <span>Headline 2</span>
        <span>Headline 3</span>
        <span>Headline 4</span>
      </div>
    </React.Fragment>
  );
};

export default MenueModal;
