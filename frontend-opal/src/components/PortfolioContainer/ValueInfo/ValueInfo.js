import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Card, CardItem, Button } from 'native-base';
import getTotalInvestment from 'components/common/getTotalInvestment';
import styles from './styles';

const ValueInfo = ({ portfolio }) => {
  let totalInvestment = '';
  if (portfolio[0]) {
    totalInvestment = getTotalInvestment(portfolio)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <CardItem>
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
    </CardItem>
  );
};

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

export default connect(mapStateToProps, null)(ValueInfo);

ValueInfo.defaultProps = {
  portfolio: []
};

ValueInfo.propTypes = {
  portfolio: PropTypes.arrayOf(
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
