import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

import tools from 'components/common/tools';
import presetProps from 'components/WatchList/presetProps';

function FlyInInstruments({ Child, data, index }) {
  const animValues = data.map((_, valueIndex) => ({
    opacity: new Animated.Value(0),
    position: new Animated.ValueXY({ x: 0, y: -tools.getPixel(20 * (valueIndex + 1)) })
  }));
  const [animList, _] = useState(animValues);

  useEffect(() => {
    Animated.parallel([
      Animated.parallel(
        animList.map((one, posIndex) => {
          return Animated.timing(animList[posIndex].position, {
            toValue: { x: 0, y: 0 },
            duration: 200
          });
        })
      ),
      Animated.parallel(
        animList.map((one, opaValue) => {
          return Animated.timing(animList[opaValue].opacity, {
            toValue: 1,
            duration: 200
          });
        })
      )
    ]).start();
  });

  return (
    <>
      {data.map((info, animIndex) => (
        <Animated.View
          key={`${info.symbol} item`}
          style={{
            transform: animList[animIndex].position.getTranslateTransform(),
            opacity: animList[animIndex].opacity
          }}
        >
          <Child data={info} index={index} />
        </Animated.View>
      ))}
    </>
  );
}

FlyInInstruments.defaultProps = {
  Child: {},
  data: [presetProps.defaultQuote],
  index: 0
};

FlyInInstruments.propTypes = {
  /* eslint-disable-next-line */
  Child: PropTypes.object,
  data: PropTypes.arrayOf(presetProps.quoteTypes),
  index: PropTypes.number
};

export default FlyInInstruments;
