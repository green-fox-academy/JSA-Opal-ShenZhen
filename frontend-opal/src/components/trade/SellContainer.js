import React from 'react';
import { Content, View } from 'native-base';
import { KeyboardAvoidingView } from 'react-native';

import PerformanceCard from 'components/InstrumentDetail/PerformanceCard/PerformanceCard';
import presetProps from 'components/InstrumentDetail/presetProps';
import BidCard from './BidCard/BidCard';

const SellContainer = ({ chartData }) => {
  return (
    <Content>
      <KeyboardAvoidingView>
        <PerformanceCard apiData={chartData} />
        <BidCard title="sell" />
        <View style={{ height: 200 }} />
      </KeyboardAvoidingView>
    </Content>
  );
};

SellContainer.defaultProps = {
  chartData: []
};

SellContainer.propTypes = {
  chartData: presetProps.chartDataTypes
};

export default SellContainer;
