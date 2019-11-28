import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'native-base';
import styles from './styles';

const ValueInfo = ({ totalInvestment }) => {
  return (
    <View style={styles.valueArea}>
      <Text style={styles.title}>Value</Text>

      <Card>
        <View style={styles.investment}>
          <Text style={styles.name}>Total Investment</Text>
          <Text style={styles.amount}>{totalInvestment}</Text>
        </View>

        <TouchableOpacity>
          <Text style={styles.button}>INVESTMENT ACCOUNT</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

const mapStateToProps = state => ({
  totalInvestment: !state.portfolio[0] ? '' : state.portfolio[0].totalInvestment
});

export default connect(mapStateToProps, null)(ValueInfo);

ValueInfo.propTypes = {
  totalInvestment: PropTypes.string.isRequired
};
