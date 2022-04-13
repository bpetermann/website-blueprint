import React, { useState } from 'react';

import styles from './Slideshow.module.css';

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

  console.log(slideshowArray);

  const slideshowOutput = slideshowArray.slice(0, 3);

  return (
    <div className={styles.container}>
      <button className={styles['count-down']}>
        <img
          src={require('../images/arrow-left.png')}
          alt='Arrow key-left'
          className={styles['count-down-button']}
          onClick={oneSlideDownHandler}
        />
      </button>
      {slideshowOutput.map((item) => {
        return (
          <div className={styles['content-container']} key={item}>
            {item}
          </div>
        );
      })}
      <button className={styles['count-up']}>
        <img
          src={require('../images/arrow-right.png')}
          alt='Arrow key-right'
          className={styles['count-up-button']}
          onClick={oneSlideUpHandler}
        />
      </button>
    </div>
  );
};

export default Slideshow;
