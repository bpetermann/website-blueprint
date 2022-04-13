import React, { useState } from 'react';

import styles from './Slideshow.module.css';

const Slideshow = (props) => {
  const mobileScreen = window.matchMedia('(min-width: 40rem)').matches;
  const [visibleSlideshowItems, setVisibleSlideshowItems] = useState({
    slideStart: 0,
    slideEnd: 4,
    limit: props.content.length,
  });
  let slideshowOutput;

  const slideShowCountUpHandler = () => {
    setVisibleSlideshowItems((prevState) => ({
      ...prevState,
      slideStart: visibleSlideshowItems.slideStart + 1,
      slideEnd: visibleSlideshowItems.slideEnd + 1,
    }));
  };

  const slideShowCountDownHandler = () => {
    setVisibleSlideshowItems((prevState) => ({
      ...prevState,
      slideStart: visibleSlideshowItems.slideStart - 1,
      slideEnd: visibleSlideshowItems.slideEnd - 1,
    }));
  };

  if (mobileScreen) {
    slideshowOutput = props.content.slice(
      visibleSlideshowItems.slideStart,
      visibleSlideshowItems.slideEnd
    );
  } else
    slideshowOutput = props.content.slice(
      visibleSlideshowItems.slideStart,
      visibleSlideshowItems.slideEnd - 2
    );

  return (
    <div className={styles.container}>
      {visibleSlideshowItems.slideStart > 0 && (
        <button
          className={styles['count-down']}
          onClick={slideShowCountDownHandler}
        >
          &#8592;
        </button>
      )}
      {slideshowOutput.map((item) => {
        return (
          <div className={styles['content-container']} key={item}>
            {item}
          </div>
        );
      })}
      {visibleSlideshowItems.slideEnd <= visibleSlideshowItems.limit && (
        <button
          className={styles['count-up']}
          onClick={slideShowCountUpHandler}
        >
          &#8594;
        </button>
      )}
    </div>
  );
};

export default Slideshow;
