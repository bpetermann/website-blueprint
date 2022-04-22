import React from 'react';
import { Parallax } from 'react-parallax';
import styles from './ImageBox.module.css';

import image from '../../images/vienna.png';

const ImageBox = () => {
  return (
    <div className={styles['container']}>
      <Parallax
        bgImage={image}
        className={styles.image}
        strength={350}
        // renderLayer={(percentage) => (
        //   <div
        //     className={styles['overlay']}
        //     style={{
        //       width: '100%',
        //       height: '100%',
        //       position: 'absolute',
        //       background: `rgba(237, 237, 237, ${percentage - 0.2}`,
        //       left: '0%',
        //       top: '0%',
        //     }}
        //   >
        //     {console.log(percentage)}
        //   </div>
        // )}
      ></Parallax>
    </div>
  );
};

export default ImageBox;
