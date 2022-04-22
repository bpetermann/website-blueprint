import React from 'react';
import styles from './Footer.module.css';
import Accordion from './Accordion';

const Footer = () => {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['container']}>
        <div className={styles['headline-container']}>
          <Accordion />
        </div>
        <nav className={styles['nav-container']}>
          <a href='https://github.com/bpetermann'>Home</a>
          <a href='https://github.com/bpetermann'>About</a>
          <a href='https://github.com/bpetermann'>Contact</a>
        </nav>
        <p className={styles['text-content']}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </div>
    </div>
  );
};

export default Footer;
