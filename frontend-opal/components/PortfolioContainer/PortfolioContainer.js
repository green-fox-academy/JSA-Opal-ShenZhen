import React from 'react';
import { View } from 'react-native';
import styles from './styles';

import ValueInfo from './ValueInfo';
import AllocationInfo from './AllocationInfo';

const PortfolioContainer = () => {
  const totalInvestment = '3,400';
  const pieData = [
    { x: 'IT', y: 40, label: '40%' },
    { x: 'Finance', y: 30, label: '30%' },
    { x: 'Energy', y: 30, label: '30%' },
  ];
  const legendData = [
    { name: 'IT', symbol: { type: 'square' } },
    { name: 'Finance', symbol: { type: 'square' } },
    { name: 'Energy', symbol: { type: 'square' } },
  ];
  const pieColor = ['#711702', '#A91600', '#E12C00'];

  return (
    <View style={styles.portfolioArea}>
      <ValueInfo totalInvestment={totalInvestment} />

      <AllocationInfo pieData={pieData} pieColor={pieColor} legendData={legendData} />
    </View>
  );
};

export default PortfolioContainer;
