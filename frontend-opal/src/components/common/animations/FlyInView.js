import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

function FlyInView({ position, style, children }) {
  const [animValues, _] = useState({
    position: new Animated.ValueXY(position),
    opacity: new Animated.Value(0)
  });

  useEffect(() => {
    Animated.parallel([
      Animated.timing(animValues.opacity, {
        toValue: 1,
        duration: 200
      }),
      Animated.timing(animValues.position, {
        toValue: { x: 0, y: 0 },
        duration: 200
      })
    ]).start();
  });

  return (
    <Animated.View
      style={[
        { transform: animValues.position.getTranslateTransform(), opacity: animValues.opacity },
        style
      ]}
    >
      {children}
    </Animated.View>
  );
}

FlyInView.defaultProps = {
  position: { x: 0, y: 0 },
  style: {},
  children: []
};

FlyInView.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }),
  /* eslint-disable-next-line */
  style: PropTypes.object,
  children: PropTypes.arrayOf(PropTypes.element)
};

export default FlyInView;
