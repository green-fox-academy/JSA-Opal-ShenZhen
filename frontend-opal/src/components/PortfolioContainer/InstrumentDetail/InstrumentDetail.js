import React, { useEffect } from 'react';
import { Container, Header } from 'native-base';
import thunk from 'thunks/portfolio';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import headers from 'components/common/headers';
import PerformanceCard from './PerformanceCard';
import DetailCard from './DetailCard/DetailCard';
import NewsCard from './NewsCard';

let symbol = 'MSFT';

const InstrumentDetail = ({ fetchPortfolio }) => {
  useEffect(() => {
    fetchPortfolio();
  }, [fetchPortfolio]);

  return (
    <Container>
      <PerformanceCard />
      <DetailCard />
      <NewsCard symbol={symbol}/>
    </Container>
  );
};

headers.addDetailHeader(InstrumentDetail, symbol);

const mapDispatchToProps = dispatch => {
  return {
    fetchPortfolio: () => dispatch(thunk.fetchPortfolio())
  };
};

export default connect(null, mapDispatchToProps)(InstrumentDetail);

InstrumentDetail.propTypes = {
  fetchPortfolio: PropTypes.func.isRequired
};
