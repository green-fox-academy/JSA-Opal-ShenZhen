import React from 'react';
import { View, Text } from 'react-native';

import headers from 'components/common/headers';
import styles from './styles';
import ValueInfo from './ValueInfo';
import AllocationInfo from './AllocationInfo';
import Instruments from './Instruments';

const PortfolioContainer = () => {
  const totalInvestment = '3,400';
  const pieData = [
    { x: 'IT', y: 40, label: '40%' },
    { x: 'Finance', y: 30, label: '30%' },
    { x: 'Energy', y: 30, label: '30%' }
  ];
  const legendData = [
    { name: 'IT', symbol: { type: 'square' } },
    { name: 'Finance', symbol: { type: 'square' } },
    { name: 'Energy', symbol: { type: 'square' } }
  ];
  const pieColor = ['#711702', '#A91600', '#E12C00'];
  const instrumentsList = [
    {
      company: 'FB - Facebook Inc.',
      stockExchange: 'NASDAQ',
      /* eslint-disable-next-line */
    profileImg: require('./Instruments/images/avatarPlaceholder.png'),
      positions: 136,
      marketValue: 11863.28,
      unrlzedPLPercentage: '4.5%',
      unrlzedPL: 510.86
    }
  ];

  return (
    <View style={styles.portfolioArea}>
      <ValueInfo totalInvestment={totalInvestment} />

      <AllocationInfo pieData={pieData} pieColor={pieColor} legendData={legendData} />

      <Instruments InstrumentList={instrumentsList} />
    </View>
  );
};

headers.addListHeader(PortfolioContainer, 'Investments');

export default PortfolioContainer;
