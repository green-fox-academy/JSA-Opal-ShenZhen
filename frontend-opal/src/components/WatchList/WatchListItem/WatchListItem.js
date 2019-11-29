import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { AntDesign } from 'react-native-vector-icons';
import { Button } from 'native-base';
import PropTypes from 'prop-types';
import styles from './styles';
import InstrumentItems from '../InstrumentItems/instrumentItems';
import ChartDetail from '../ChartDetail/ChartDetail';

const WatchListItem = ({ item, info, stockData, chartData }) => {
  const [showDetails, setShowDetails] = useState(false);

  const changeShowWatchListItem = () => setShowDetails(!showDetails);
  return (
    <View>
      <View style={styles.border}>
        <Text>{item}</Text>
        <Button onPress={changeShowWatchListItem}>
          <AntDesign name="caretdown" size={15} color="black" />
        </Button>
      </View>
      {showDetails && (
        <View>
          <InstrumentItems infos={info} />
          <ChartDetail stockData={stockData} chartData={chartData} />
        </View>
      )}
    </View>
  );
};

WatchListItem.propTypes = {
  item: PropTypes.string.isRequired,
  info: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      num: PropTypes.string,
      increase: PropTypes.string,
      whole: PropTypes.string
    })
  ).isRequired,
  chartData: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    })
  ).isRequired,
  stockData: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default WatchListItem;
