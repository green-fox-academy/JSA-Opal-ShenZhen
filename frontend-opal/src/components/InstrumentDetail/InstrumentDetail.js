import React, { useEffect } from 'react';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import { View } from 'react-native';

import headers from 'components/common/headers';
import thunks from 'thunks/instrumentDetail';
import actions from 'actions/instrumentDetail';
import PerformanceCard from './PerformanceCard';
import DetailCard from './DetailCard/DetailCard';

const InstrumentDetail = ({ navigation, instrumentDetail, fetchData, clearData }) => {
  useEffect(() => {
    fetchData(navigation.getParam('detailTitle'));
    return () => {
      clearData();
    };
  }, [fetchData]);

  return (
    <Container>
        <PerformanceCard />
        <DetailCard apiData={instrumentDetail} />
    </Container>
  );
};

headers.addDetailHeader(InstrumentDetail);

const mapStateToProps = ({ instrumentDetail }) => ({
  instrumentDetail
});

const mapDispatchToProps = dispatch => ({
  fetchData: symbol => dispatch(thunks.getInstrumentDetailData(symbol)),
  clearData: () => dispatch(actions.clearDetailData())
});

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentDetail);
