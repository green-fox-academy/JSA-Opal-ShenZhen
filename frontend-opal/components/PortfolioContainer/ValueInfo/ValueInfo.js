import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'native-base';
import styles from './styles';

const ValueInfo = ({ totalInvestment }) => (
  <View style={styles.valueArea}>
    <Text style={styles.title}>Value</Text>

    <Card>
      <View style={styles.investment}>
        <Text style={styles.name}>Total Investment</Text>
        <Text style={styles.amount}>{totalInvestment}</Text>
      </View>

      <TouchableOpacity onPress={() => console.log('button pressed')}>
        <Text style={styles.button}>INVESTMENT ACCOUNT</Text>
      </TouchableOpacity>
    </Card>
  </View>
);

ValueInfo.propTypes = {
  totalInvestment: PropTypes.string.isRequired,
};

export default ValueInfo;
