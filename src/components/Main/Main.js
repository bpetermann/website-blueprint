import React from 'react';
import Searchbox from './Searchbox';
import Carousel from './Carousel';
import ImageBox from './ImageBox';
import Slideshow from './Slideshow';

const Main = () => {
  return (
    <>
      <Slideshow />
      <Searchbox />
      <ImageBox />
      <Carousel />
    </>
  );
};

export default Main;
