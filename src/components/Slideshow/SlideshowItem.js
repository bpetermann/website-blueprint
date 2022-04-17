import React from 'react';

import styles from './SlideshowItem.module.css';

const SlideshowItem = (props) => {
  return (
    <React.Fragment>
      {props.content.map((item) => {
        return (
          <div className={styles['content-container']} key={item}>
            <button className={styles['wishlist-button']}>
              <img
                src={require('../../images/heart.png')}
                alt={'Add Item to your Wishlist'}
                className={styles['heart-image']}
              />
            </button>
            {item}
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default SlideshowItem;
