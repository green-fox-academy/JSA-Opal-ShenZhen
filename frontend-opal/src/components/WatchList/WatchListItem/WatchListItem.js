import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from 'react-native-vector-icons';
import { Button } from 'native-base';
import PropTypes from 'prop-types';

import SingleInstrument from 'components/WatchList/SingleInstrument/SingleInstrument';
import presetProps from 'components/WatchList/presetProps';
import styles from './styles';

const WatchListItem = ({ item, data }) => {
  const [showDetails, setShowDetails] = useState(false);

  const changeShowWatchListItem = () => setShowDetails(!showDetails);
  return (
    <View>
      <TouchableOpacity style={styles.border} onPress={changeShowWatchListItem}>
        <Text>{item}</Text>
        <Button>
          <AntDesign name="caretdown" size={15} color="black" />
        </Button>
      </TouchableOpacity>
      {showDetails &&
        data.map(info => (
          <View key={`${info.symbol} item`}>
            <SingleInstrument data={info} />
          </View>
        ))}
    </View>
  );
};

WatchListItem.defaultProps = {
  item: '',
  data: [presetProps.defaultQuote]
};

WatchListItem.propTypes = {
  item: PropTypes.string,
  data: PropTypes.arrayOf(presetProps.quoteTypes)
};

export default WatchListItem;
