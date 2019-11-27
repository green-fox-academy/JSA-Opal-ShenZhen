import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { AntDesign } from 'react-native-vector-icons';
import { Button } from 'native-base';
import PropTypes from 'prop-types';
import styles from './styles';
import InstrumentItems from '../InstrumentItems/instrumentItems';
import ChartDetail from '../ChartDetail/ChartDetail';


const WatchList = ({
  watchlistArr, info, stockData, chartData,
}) => (
  <View>
    {watchlistArr.map((item) => {
      const [showwatchlist, setShowwatchlist] = useState(false);

      const toggle = (parm) => !parm;

      const changeShowWatchList = () => (
        setShowwatchlist((toggle(showwatchlist)))
      );
      return (
        <View key={item}>
          <View style={styles.border}>
            <Text>{item}</Text>
            <Button onPress={changeShowWatchList}><AntDesign name="caretdown" size={15} color="black" /></Button>
          </View>
          {showwatchlist ? (
            <View>
              <InstrumentItems infos={info} />
              <ChartDetail stockData={stockData} chartData={chartData} />
            </View>
          ) : null}
        </View>
      );
    })}
  </View>
);

WatchList.propTypes = {
  watchlistArr: PropTypes.arrayOf(PropTypes.string).isRequired,
  info: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      num: PropTypes.string,
      increase: PropTypes.string,
      whole: PropTypes.string,
    }),
  ).isRequired,
  chartData: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  ).isRequired,
  stockData: PropTypes.objectOf(PropTypes.any).isRequired,
};


export default WatchList;
