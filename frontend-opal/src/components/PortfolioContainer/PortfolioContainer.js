import React, { useEffect } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import thunksPortfolio from 'thunks/portfolio';
import thunksUserPortfolioInfo from 'thunks/userPortfolioInfo';

import styles from './styles';

import ValueInfo from './ValueInfo';
import AllocationInfo from './AllocationInfo';
import Instruments from './Instruments';

const PortfolioContainer = ({
  userPortfolioInfo,
  onGetPortfolioData,
  onfetchPortfolioEndpoint
}) => {
  useEffect(() => onGetPortfolioData(), [onGetPortfolioData]);
  useEffect(() => onfetchPortfolioEndpoint(), [onfetchPortfolioEndpoint]);
  console.log(userPortfolioInfo);

  return (
    <>
      <View style={styles.portfolioArea}>
        <ValueInfo />
        <AllocationInfo />
        <Instruments />
      </View>
    </>
  );
};

const mapStateToProps = state => ({
  userPortfolioInfo: state.userPortfolioInfo
});

const mapDispatchToProps = dispatch => {
  return {
    onGetPortfolioData: () => dispatch(thunksPortfolio.getPortfolioData()),
    onfetchPortfolioEndpoint: () => dispatch(thunksUserPortfolioInfo.fetchPortfolioEndpoint())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer);

PortfolioContainer.propTypes = {
  onGetPortfolioData: PropTypes.func.isRequired,
  onfetchPortfolioEndpoint: PropTypes.func.isRequired
};
