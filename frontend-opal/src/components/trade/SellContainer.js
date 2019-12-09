import React from 'react';
import { Content, Text, View} from 'native-base';
import PerformanceCard from '../PortfolioContainer/InstrumentDetail/PerformanceCard/PerformanceCard';
import BidCard from './BidCard/BidCard';
import {KeyboardAvoidingView} from 'react-native';



const SellContainer = () => {

  return (
    <Content>
      <KeyboardAvoidingView>
      <PerformanceCard />
      <BidCard title = 'sell'/>
      <View style = {{height : 200}}/>
      </KeyboardAvoidingView>
    </Content>
  );
};

export default SellContainer;