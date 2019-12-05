import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Card, Button } from 'native-base';
import getTotalInvestment from 'components/common/getTotalInvestment';
import styles from './styles';

const ValueInfo = ({ fetchPortfolio }) => {
  let totalInvestment = '';
  if (fetchPortfolio[0]) {
    totalInvestment = getTotalInvestment(fetchPortfolio)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

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
  fetchPortfolio: state.fetchPortfolio.instruments
});

export default connect(mapStateToProps, null)(ValueInfo);

ValueInfo.defaultProps = {
  fetchPortfolio: []
};

ValueInfo.propTypes = {
  fetchPortfolio: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      user_id: PropTypes.number,
      symbol: PropTypes.string,
      amount: PropTypes.number,
      company: PropTypes.string,
      stockExchange: PropTypes.string,
      marketValue: PropTypes.number,
      profileImg: PropTypes.any,
      sector: PropTypes.string
    })
  )
};
