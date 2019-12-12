import React from 'react';
import { Content, View } from 'native-base';
import { KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';

import PerformanceCard from 'components/InstrumentDetail/PerformanceCard/PerformanceCard';
import presetProps from 'components/InstrumentDetail/presetProps';
import BidCard from './BidCard/BidCard';

const BuyContainer = ({ chartData }) => {
  return (
    <Content>
      <KeyboardAvoidingView>
        <PerformanceCard apiData={chartData} />
        <BidCard title="Bid" />
        <View style={{ height: 200 }} />
      </KeyboardAvoidingView>
    </Content>
  );
};

BuyContainer.defaultProps = {
  chartData: []
};

BuyContainer.propTypes = {
  chartData: presetProps.chartDataTypes
};

export default BuyContainer;
