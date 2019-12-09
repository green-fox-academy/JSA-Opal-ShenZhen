import React from 'react';
import { View, TextInput} from 'react-native';
import { Text,ListItem } from 'native-base';

import styles from '../styles';


const StatisticDetail = () => {
  const nameData = [
    { id: 1, name: 'Qty'},
    { id: 2, name: 'Price'},
    { id: 3, name: 'Cancel after (hrs)' }]

  const colon = ':';
  const renderItems = items =>
    items.map(item => (
      <View key={item.id} style={styles.detailItem}>
        <ListItem>
          <Text style={styles.itemTitle}>{item.name}
          {colon}
          </Text>
          <TextInput style = {styles.itemData}/>

        </ListItem>
      </View>
    ));

  return <View style={styles.detailSection}>{renderItems(nameData)}</View>;
};

export default StatisticDetail;
