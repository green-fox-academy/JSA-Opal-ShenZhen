import React from 'react';
import { Container, Header } from 'native-base';

import headers from 'components/common/headers';
import PerformanceCard from './PerformanceCard';
import DetailCard from './DetailCard/DetailCard';

const InstrumentDetail = () => {
  return (
    <Container>
      <PerformanceCard />
      <DetailCard />
    </Container>
  );
};

headers.addDetailHeader(InstrumentDetail);

export default InstrumentDetail;
