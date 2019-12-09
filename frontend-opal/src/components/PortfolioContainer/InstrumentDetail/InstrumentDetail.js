import React, { useEffect } from 'react';
import { Container } from 'native-base';

import headers from 'components/common/headers';
import PerformanceCard from './PerformanceCard';
import DetailCard from './DetailCard/DetailCard';
import thunks from 'thunks/stock_API';

const InstrumentDetail = ({ navigation }) => {
  let detailData = [];

  useEffect(async () => {
    const apiData = await thunks.fetchInstrumentDetailData(navigation.getParam('detailTitle'));
    const { week52High, week52Low, peRatio  } = apiData; 
  });



  return (
    <Container>
      <PerformanceCard />
      <DetailCard />
    </Container>
  );
};

headers.addDetailHeader(InstrumentDetail);

export default InstrumentDetail;
