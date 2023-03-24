import React from 'react';
import {View, Image as RNImage} from 'react-native';

const Image = (props) => {
  return <RNImage {...props} />;
};

Image.defaultProps = {
  resizeMode: 'contain',
};

export default Image;
