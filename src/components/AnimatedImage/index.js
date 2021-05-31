import React from 'react';
import {Animated} from 'react-native';
import styles from './styles';

const AnimatedImage = ({
  source,
  thumbnail,
  resizeMode,
  style,
  containerStyles,
}) => {
  const thumbnailAnimated = new Animated.Value(0);
  const imageAnimated = new Animated.Value(0);

  const onThumbnailLoad = () => {
    Animated.timing(thumbnailAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const onImageLoad = () => {
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={containerStyles}>
      <Animated.Image
        source={{uri: thumbnail}}
        style={[style, {opacity: thumbnailAnimated}]}
        resizeMode={resizeMode ? resizeMode : 'cover'}
        onLoad={onThumbnailLoad}
        blurRadius={1}
      />
      <Animated.Image
        source={{uri: source}}
        style={[styles.imageOverlay, {opacity: imageAnimated}, style]}
        resizeMode={resizeMode ? resizeMode : 'cover'}
        onLoad={onImageLoad}
      />
    </Animated.View>
  );
};

export default AnimatedImage;
