import React from 'react';

import Searchbox from './Searchbox';
import Carousel from './Carousel';
import ImageBox from './ImageBox';
import Slideshow from './Slideshow';

const Main = (props) => {
  return (
    <>
      <Slideshow content={props.content[0]} />
      <Searchbox />
      <ImageBox />
      <Carousel content={props.content[1]} />
    </>
  );
};

export default Main;
