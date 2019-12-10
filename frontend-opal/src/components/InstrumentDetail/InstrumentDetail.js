import React, { useEffect } from 'react';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import headers from 'components/common/headers';
import thunks from 'thunks/instrumentDetail';
import actions from 'actions/instrumentDetail';
import PerformanceCard from './PerformanceCard';
import DetailCard from './DetailCard/DetailCard';
import presetProps from './presetProps';

const InstrumentDetail = ({ navigation, detailData, fetchData, clearData, chartData }) => {
  useEffect(() => {
    fetchData(navigation.getParam('detailTitle'));
    return () => {
      clearData();
    };
  }, [fetchData]);

  return (
    <Container>
      <PerformanceCard apiData={chartData} />
      <DetailCard apiData={detailData} />
    </Container>
  );
};

headers.addDetailHeader(InstrumentDetail);

const mapStateToProps = ({ instrumentDetail }) => ({
  detailData: instrumentDetail.detailData,
  chartData: instrumentDetail.chartData
});

const mapDispatchToProps = dispatch => ({
  fetchData: symbol => dispatch(thunks.getInstrumentDetailData(symbol)),
  clearData: () => dispatch(actions.clearDetailData())
});

InstrumentDetail.defaultProps = {
  navigation: {},
  detailData: [],
  fetchData: null,
  clearData: null,
  chartData: []
};

InstrumentDetail.propTypes = {
  /* eslint-disable-next-line */
  navigation: PropTypes.object,
  detailData: presetProps.detailDataTypes,
  fetchData: PropTypes.func,
  clearData: PropTypes.func,
  chartData: presetProps.chartDataTypes
};

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentDetail);
