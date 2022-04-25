import React from 'react';

import Searchbox from './Searchbox';
import Carousel from './Carousel';
import ImageBox from './ImageBox';
import Slideshow from './Slideshow';

const Main = (props) => {
  return (
    <React.Fragment>
      <Slideshow content={props.content[0]} />
      <Searchbox />
      <ImageBox />
      <Carousel content={props.content[1]} />
    </React.Fragment>
  );
};

export default Main;
