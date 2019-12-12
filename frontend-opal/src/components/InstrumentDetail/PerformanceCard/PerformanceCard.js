import React from 'react';
import { Content, Text, Card, CardItem, Spinner } from 'native-base';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import LineChart from 'components/PortfolioContainer/LineChart';
import PerformanceFooter from './PerformanceFooter';
import styles from '../styles';

const PerformanceCard = ({ apiData }) => {
  const intervals = [
    { id: 1, val: '1D' },
    { id: 2, val: '2D' },
    { id: 3, val: '1W' },
    { id: 4, val: '1M' },
    { id: 5, val: '6M' },
    { id: 6, val: '1Y' },
    { id: 7, val: '5Y' }
  ];

  return (
    <CardItem padder style={styles.firstCard}>
      <View style={{ width: '100%' }}>
        <Card transparent>
          <Text style={styles.title}>Performance</Text>
        </Card>

        <Card>
          <View cardBody style={styles.detail}>
            {apiData.length === 0 ? (
              <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Spinner color="#e17055" />
              </View>
            ) : (
              <LineChart data={apiData} />
            )}
          </View>

          <PerformanceFooter intervals={intervals} />
        </Card>
      </View>
    </CardItem>
  );
};

PerformanceCard.defaultProps = {
  apiData: []
};

PerformanceCard.propTypes = {
  apiData: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.string,
      y: PropTypes.number
    })
  )
};

export default PerformanceCard;
