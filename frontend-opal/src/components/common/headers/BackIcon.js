import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import { NavigationContext } from 'react-navigation';
import PropTypes from 'prop-types';

import tools from 'components/common/tools';

const styles = StyleSheet.create({
  searchContainer: {
    width: tools.getPixel(240),
    borderBottomWidth: tools.getPixel(2),
    height: tools.getPixel(30)
  },
  backIcon: {
    color: 'white',
    marginLeft: tools.getPixel(20)
  }
});

function BackIcon({ prevPage }) {
  const navigation = useContext(NavigationContext);

  return (
    <Icon
      name="md-arrow-back"
      style={styles.backIcon}
      onPress={() => navigation.navigate(prevPage)}
    />
  );
}

BackIcon.defaultProps = {
  prevPage: ''
};

BackIcon.propTypes = {
  prevPage: PropTypes.string
};

export default BackIcon;
