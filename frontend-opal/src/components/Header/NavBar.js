import React from 'react';
import PropTypes from 'prop-types';
import { Button, View } from 'react-native';
import styles from './styles';

const NavBar = ({ navTitles }) => {
  const handlePress = (key) => key === 'PORTFOLIO';

  const renderItems = (titles) => titles.map((title) => (
    <View
      key={title.id}
      style={[styles.navTitle, handlePress(title.key) && styles.buttonPressed]}
    >
      <Button title={title.key} color="#e17055" />
    </View>
  ));

  return <View style={styles.navBars}>{renderItems(navTitles)}</View>;
};

NavBar.propTypes = {
  navTitles: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number,
      key: PropTypes.string,
    }),
  ).isRequired,
};

export default NavBar;
