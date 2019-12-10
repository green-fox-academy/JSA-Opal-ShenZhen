import React from 'react';
import { Content, Text, View } from 'native-base';
import { KeyboardAvoidingView } from 'react-native';
import PerformanceCard from '../PortfolioContainer/InstrumentDetail/PerformanceCard/PerformanceCard';
import BidCard from './BidCard/BidCard';

const BuyContainer = () => {
  return (
    <Content>
      <KeyboardAvoidingView>
        <PerformanceCard />
        <BidCard title="bid" />
        <View style={{ height: 200 }} />
      </KeyboardAvoidingView>
    </Content>
  );
};

export default BuyContainer;
