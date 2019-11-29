import React from 'react';
import { Button, View } from 'react-native';
import styles from './styles';

const SegControl = () => {
  const navTitles = [
    { id: 1, key: 'PORTFOLIO' },
    { id: 2, key: 'WATCHLIST' }
  ];

  const handlePress = key => key === 'PORTFOLIO';

  const renderItems = titles =>
    titles.map(title => (
      <View
        key={title.id}
        style={[styles.navTitle, handlePress(title.key) && styles.buttonPressed]}
      >
        <Button title={title.key} color="#e17055" />
      </View>
    ));

  return <View style={styles.navBars}>{renderItems(navTitles)}</View>;
};

export default SegControl;
