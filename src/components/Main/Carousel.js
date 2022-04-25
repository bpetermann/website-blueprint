import React, { useRef } from 'react';
import styles from './Carousel.module.css';

import CarouselItem from './CarouselItem';

const Carousel = (props) => {
  const scrollbar = useRef(null);

  const scrollDownHandler = () => {
    scrollbar.current.scrollLeft -= 235;
  };

  const scrollUpHandler = () => {
    scrollbar.current.scrollLeft += 235;
  };

  return (
    <div className={styles.container}>
      <button className={styles['count-down']}>
        <img
          src={require('../../Assets/images/arrow-left.png')}
          alt='Arrow key-left'
          className={styles['count-down-button']}
          onClick={scrollDownHandler}
        />
      </button>

      <div ref={scrollbar} className={styles['content-container']}>
        <CarouselItem content={props.content} />
      </div>
      <button className={styles['count-up']}>
        <img
          src={require('../../Assets/images/arrow-right.png')}
          alt='Arrow key-right'
          className={styles['count-up-button']}
          onClick={scrollUpHandler}
        />
      </button>
    </div>
  );
};

export default Carousel;
