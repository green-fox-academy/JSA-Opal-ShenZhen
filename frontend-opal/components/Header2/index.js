import React from 'react';
import {
  Button,
  View,
  TextInput,
  Image,
  Text,
} from 'react-native';
import styles from './styles.js';

const Header = () => {
  const narTitles = [
    { key: 'PORTFOLI' },
    { key: 'WATCHLIST' },
  ];
  const renderItems = (titles) => (
    titles.map((title) => (
      <View style={styles.narTitle} key={title.key}>
        <Button title={title.key} color="#e17055" />
      </View>

    ))
  );
  return (
    <View>
      <View style={styles.search}>
        <Image style={styles.listIcon} source={require('../../assets/list-icon.png')} />
        <Text style={styles.input}>Investments</Text>
        <Image style={styles.searchButton} source={require('../../assets/search-button.png')} />
      </View>

      <View style={styles.navBars}>
        {renderItems(narTitles)}
      </View>

    </View>
  );
};

export default Header;
