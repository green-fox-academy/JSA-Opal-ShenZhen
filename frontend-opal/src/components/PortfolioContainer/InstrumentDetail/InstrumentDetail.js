import React from 'react';
import { Container, Header, Content, Body, Text, Card, CardItem, Button } from 'native-base';

import PerformanceCard from './PerformanceCard';
import DetailCard from './DetailCard/DetailCard';

let InstrumentDetail = () => {
  return (
    <Container>
      <Header />
      <PerformanceCard  />
      <DetailCard />
    </Container>
  );
};

export default InstrumentDetail;
