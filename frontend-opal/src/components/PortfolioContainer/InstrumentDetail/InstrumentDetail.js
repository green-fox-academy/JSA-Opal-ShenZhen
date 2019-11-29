import React from 'react';
import { Container, Header } from 'native-base';

import PerformanceCard from './PerformanceCard';
import DetailCard from './DetailCard/DetailCard';

const InstrumentDetail = () => {
  return (
    <Container>
      <Header />
      <PerformanceCard />
      <DetailCard />
    </Container>
  );
};

export default InstrumentDetail;
