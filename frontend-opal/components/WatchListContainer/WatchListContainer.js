import React from 'react';
import { View } from 'react-native';
import WatchList from '../WatchList/WatchList';
import Header from '../NewHeader/newHeader';
import NavBar from '../Header/NavBar';

export default function WatchListContainer() {
  const info = [{
    name: 'MSFT', num: '141.21', increase: '+0.23', whole: '1.2M',
  },
  {
    name: 'AMZN', num: '2108.2', increase: '-0.06', whole: '609K',
  },
  {
    name: 'AAPL', num: '250.7', increase: '+1.63', whole: '810K',
  }];

  const chartData = [
    { x: 1, y: 8 },
    { x: 2, y: 7 },
    { x: 3, y: 5 },
  ];

  const stockData = {
    low: '231.6',
    high: '250.7',
    Pe: '20.3',
    EPS: '1.2',
    DivYield: '2.34%',
  };

  const watchlistArr = ['my watchlist1', 'my watchlist2'];

  const navTitles = [
    { id: 1, key: 'PORTFOLIO' },
    { id: 2, key: 'WATCHLIST' },
  ];

  return (
    <View>

      <Header />
      <NavBar navTitles={navTitles} />
      <WatchList
        watchlistArr={watchlistArr}
        info={info}
        stockData={stockData}
        chartData={chartData}
      />
    </View>
  );
}
