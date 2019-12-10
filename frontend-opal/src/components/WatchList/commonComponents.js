import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

export function FormatText({ content, blockStyle, textStyle = {} }) {
  return (
    <View style={blockStyle}>
      <Text style={textStyle}>{content}</Text>
    </View>
  );
}

FormatText.defaultProps = {
  content: '',
  blockStyle: {},
  textStyle: {}
};

FormatText.propTypes = {
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /* eslint-disable react/forbid-prop-types */
  blockStyle: PropTypes.object,
  textStyle: PropTypes.object
  /* eslint-disable react/forbid-prop-types */
};

export function FormatTouchIcon({ iconStyle, iconSource, blockStyle, pressFunc = null }) {
  return (
    <TouchableOpacity style={blockStyle} onPress={pressFunc}>
      <Image style={iconStyle} source={iconSource} />
    </TouchableOpacity>
  );
}

FormatTouchIcon.defaultProps = {
  iconStyle: {},
  iconSource: '',
  blockStyle: {},
  pressFunc: PropTypes.func
};

FormatTouchIcon.propTypes = {
  iconStyle: PropTypes.object,
  iconSource: PropTypes.number,
  blockStyle: PropTypes.object,
  pressFunc: PropTypes.func
};
