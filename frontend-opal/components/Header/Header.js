import React from 'react';
import { View, TextInput, Image } from 'react-native';
import styles from './styles';
import ListIcon from '../../assets/list-icon.png';
import SearchIcon from '../../assets/search-button.png';

import NavBar from './NavBar';

const Header = () => {
  const navTitles = [
    { id: 1, key: 'PORTFOLIO' },
    { id: 2, key: 'WATCHLIST' }
  ];

  return (
    <View>
      <View style={styles.search}>
        <Image style={styles.listIcon} source={ListIcon} />
        <TextInput style={styles.input} />
        <Image style={styles.searchButton} source={SearchIcon} />
      </View>

      <NavBar navTitles={navTitles} />
    </View>
  );
};

export default Header;
