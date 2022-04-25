import React from 'react';
import { Parallax } from 'react-parallax';
import styles from './ImageBox.module.css';

import image from '../../Assets/images/vienna.png';

const ImageBox = () => {
  return (
    <div className={styles['container']}>
      <Parallax
        bgImage={image}
        className={styles.image}
        strength={350}
      ></Parallax>
    </div>
  );
};

export default ImageBox;
