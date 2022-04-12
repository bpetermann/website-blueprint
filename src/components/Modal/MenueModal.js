import React from 'react';

import styles from './MenueModal.module.css';
import Backdrop from './Backdrop';

const MenueModal = (props) => {
  return (
    <React.Fragment>
      <Backdrop onClose={props.onClick} />
      <div className={styles.container}>
        <button className={styles['close-button']} onClick={props.onClick}>X</button>
        <button className={styles['login-button']}>Login</button>
        <span>Headline 1</span>
        <span>Headline 2</span>
        <span>Headline 3</span>
        <span>Headline 4</span>
      </div>
    </React.Fragment>
  );
};

export default MenueModal;
