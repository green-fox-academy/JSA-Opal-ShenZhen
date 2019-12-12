import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

function FadeInView({ children }) {
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1
    }).start();
  });

  return <Animated.View style={{ opacity: fadeAnim }}>{children}</Animated.View>;
}

FadeInView.propTypes = {
  children: PropTypes.element.isRequired
};

export default FadeInView;
