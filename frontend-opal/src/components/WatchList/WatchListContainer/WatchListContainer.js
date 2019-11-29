import React from 'react';
import { View } from 'react-native';
import WatchList from '../WatchList/WatchList';
import Header from '../NewHeader/newHeader';
import NavBar from '../Header/NavBar';

export default function WatchListContainer() {
  const watchlists = ['my watchlist1', 'my watchlist2'];

  const navTitles = [
    { id: 1, key: 'PORTFOLIO' },
    { id: 2, key: 'WATCHLIST' }
  ];

  return (
    <View>
      <Header />
      <NavBar navTitles={navTitles} />
      <WatchList watchlists={watchlists} />
    </View>
  );
}
