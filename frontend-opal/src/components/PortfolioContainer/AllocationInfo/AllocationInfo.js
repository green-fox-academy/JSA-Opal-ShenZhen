import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Card, Button } from 'native-base';
import palette from 'google-palette';
import getTotalInvestment from 'components/common/getTotalInvestment';
import styles from './styles';

import PieChart from '../PieChart';

const AllocationInfo = ({ fetchPortfolio }) => {
  let sectors = {};
  let totalInvestment = '';
  if (fetchPortfolio[0]) {
    totalInvestment = getTotalInvestment(fetchPortfolio);
  }

  if (fetchPortfolio[0]) {
    sectors = fetchPortfolio.reduce((sectorsList, instrument) => {
      const result = sectorsList;
      if (result[instrument.sector]) {
        result[instrument.sector].list.push(instrument);
      } else {
        result[instrument.sector] = { list: [instrument] };
      }
      return result;
    }, {});
  }

  const legendData = Object.keys(sectors).map(sector => ({
    name: sector,
    symbol: { type: 'square' }
  }));

  if (Object.keys(sectors).length !== 0) {
    Object.keys(sectors).forEach(sector => {
      sectors[sector].value =
        (
          sectors[sector].list.reduce((accumulativeValue, instrument) => {
            let result = accumulativeValue;
            result += instrument.amount * instrument.marketValue;
            return result;
          }, 0) / totalInvestment
        ).toFixed(2) * 100;
    });
  }

  const pieData = Object.keys(sectors).map(sector => ({
    x: sector,
    y: sectors[sector].value,
    label: `${sectors[sector].value}%`
  }));

  let pieColor = palette('tol-sq', Object.keys(sectors).length + 2);
  pieColor = pieColor.slice(2).map(color => `#${color}`);

  return (
    <View style={styles.allocationArea}>
      <Card transparent>
        <Text style={styles.title}>Allocation</Text>
      </Card>

      <Card>
        <View style={styles.pie}>
          <PieChart data={pieData} color={pieColor} legendData={legendData} />
        </View>

        <View style={styles.allocationButtons}>
          <Button style={styles.button}>
            <Text>SECTOR</Text>
          </Button>
          <Button style={styles.button}>
            <Text>GEOGRAPHY</Text>
          </Button>
        </View>
      </Card>
    </View>
  );
};

const mapStateToProps = state => ({
  fetchPortfolio: state.fetchPortfolio.instruments
});

export default connect(mapStateToProps, null)(AllocationInfo);

AllocationInfo.defaultProps = {
  fetchPortfolio: []
};

AllocationInfo.propTypes = {
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
