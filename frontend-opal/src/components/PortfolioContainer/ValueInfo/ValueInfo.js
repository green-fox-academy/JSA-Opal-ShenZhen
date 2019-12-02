import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card, Button } from 'native-base';
import styles from './styles';

const ValueInfo = ({ totalInvestment }) => {
  return (
    <View style={styles.valueArea}>
      <Text style={styles.title}>Value</Text>

      <Card>
        <View style={styles.investment}>
          <Text style={styles.name}>Total Investment</Text>
          <Text style={styles.amount}>{`$ ${totalInvestment}`}</Text>
        </View>

        <View style={styles.valueButton}>
          <Button style={styles.button}>
            <Text>INVESTMENT ACCOUNT</Text>
          </Button>
        </View>
      </Card>
    </View>
  );
};

const mapStateToProps = state => ({
  totalInvestment: state.portfolio.totalInvestment
});

export default connect(mapStateToProps, null)(ValueInfo);

ValueInfo.defaultProps = {
  totalInvestment: ''
};

ValueInfo.propTypes = {
  totalInvestment: PropTypes.string
};
