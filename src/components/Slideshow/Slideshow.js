import React, { useState } from 'react';

import styles from './Slideshow.module.css';
import SlideshowItem from './SlideshowItem';

const Slideshow = (props) => {
  const [slideshowArray, setslideshowArray] = useState(props.content);

  const oneSlideUpHandler = () => {
    const firstElement = slideshowArray.shift();
    const newArray = [...slideshowArray, firstElement];
    setslideshowArray(newArray);
  };

  const oneSlideDownHandler = () => {
    const lastElement = slideshowArray.pop();
    const newArray = [lastElement, ...slideshowArray];
    setslideshowArray(newArray);
  };

  const slideshowOutput = slideshowArray.slice(0, 3);

  return (
    <div className={styles.container}>
      <button className={styles['count-down']}>
        <img
          src={require('../../images/arrow-left.png')}
          alt='Arrow key-left'
          className={styles['count-down-button']}
          onClick={oneSlideDownHandler}
        />
      </button>
      <SlideshowItem content={slideshowOutput} />
      <button className={styles['count-up']}>
        <img
          src={require('../../images/arrow-right.png')}
          alt='Arrow key-right'
          className={styles['count-up-button']}
          onClick={oneSlideUpHandler}
        />
      </button>
    </div>
  );
};

export default Slideshow;
