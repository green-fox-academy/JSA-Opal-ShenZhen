import React, { useEffect } from 'react';
import { Container, Card } from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, SafeAreaView, ScrollView } from 'react-native';

import headers from 'components/common/headers';
import thunks from 'thunks/instrumentDetail';
import actions from 'actions/instrumentDetail';
import NewsCard from 'components/PortfolioContainer/News/News';
import PerformanceCard from './PerformanceCard';
import DetailCard from './DetailCard/DetailCard';
import presetProps from './presetProps';

const InstrumentDetail = ({
  navigation,
  detailData,
  fetchData,
  clearData,
  chartData,
  newsData
}) => {
  useEffect(() => {
    fetchData(navigation.getParam('detailTitle'));
    return () => {
      clearData();
    };
  }, [fetchData]);

  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          <PerformanceCard apiData={chartData} />
          <DetailCard apiData={detailData} />
        </Container>
        <Card transparent style={{ marginTop: -55 }}>
          <NewsCard getLatestNews={newsData} />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

headers.addDetailHeader(InstrumentDetail);

const mapStateToProps = ({ instrumentDetail }) => ({
  detailData: instrumentDetail.detailData,
  chartData: instrumentDetail.chartData,
  newsData: instrumentDetail.newsData
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
  chartData: [],
  newsData: []
};

InstrumentDetail.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func
  }),
  detailData: presetProps.detailDataTypes,
  fetchData: PropTypes.func,
  clearData: PropTypes.func,
  chartData: presetProps.chartDataTypes,
  newsData: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentDetail);
