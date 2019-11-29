import React, { useState } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import WatchListItem from '../WatchListItem/WatchListItem';

const WatchList = ({ watchlistArr }) => {
  const info = [
    {
      name: 'MSFT',
      num: '141.21',
      increase: '+0.23',
      whole: '1.2M'
    },
    {
      name: 'AMZN',
      num: '2108.2',
      increase: '-0.06',
      whole: '609K'
    },
    {
      name: 'AAPL',
      num: '250.7',
      increase: '+1.63',
      whole: '810K'
    }
  ];
  const chartData = [
    { x: 1, y: 8 },
    { x: 2, y: 7 },
    { x: 3, y: 5 }
  ];
  const stockData = [
    { name: '52 wk low', value: '231.6' },
    { name: '52 wk high', value: '250.7' },
    { name: 'P/E', value: '20.3' },
    { name: 'EPS', value: '1.2' },
    { name: 'DivYield', value: '2.34%' }
  ];

  return (
    <View>
      {watchlistArr.map(item => (
        <View key={item}>
          <WatchListItem item={item} stockData={stockData} chartData={chartData} info={info} />
        </View>
      ))}
    </View>
  );
};

WatchList.propTypes = {
  watchlistArr: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default WatchList;
