import React, { useRef } from 'react';
import styles from './Carousel.module.css';

const Carousel = (props) => {
  const scrollbar = useRef(null);

  const scrollDownHandler = () => {
    console.log(scrollbar.current);
    scrollbar.current.scrollLeft -= 100;
  };

  const scrollUpHandler = () => {
    scrollbar.current.scrollLeft += 100;
  };

  return (
    <div className={styles.containerAll}>
      <button className={styles['count-down']}>
        <img
          src={require('../../images/arrow-left.png')}
          alt='Arrow key-left'
          className={styles['count-down-button']}
          onClick={scrollDownHandler}
        />
      </button>

      <div ref={scrollbar} className={styles.container}>
        {props.content.map((item) => {
          return (
            <div className={styles.card} key={item}>
              <h2>{item}</h2>
            </div>
          );
        })}
      </div>
      <button className={styles['count-up']}>
        <img
          src={require('../../images/arrow-right.png')}
          alt='Arrow key-right'
          className={styles['count-up-button']}
          onClick={scrollUpHandler}
        />
      </button>
    </div>
  );
};

export default Carousel;
