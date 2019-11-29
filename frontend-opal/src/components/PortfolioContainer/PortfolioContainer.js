import React, { useEffect } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import thunks from 'thunks/portfolio';

import styles from './styles';

import ValueInfo from './ValueInfo';
import AllocationInfo from './AllocationInfo';
import Instruments from './Instruments';

const PortfolioContainer = ({ onGetPortfolioData }) => {
  useEffect(() => onGetPortfolioData(), [onGetPortfolioData]);

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

const mapDispatchToProps = dispatch => {
  return {
    onGetPortfolioData: () => dispatch(thunks.getPortfolioData())
  };
};

export default connect(null, mapDispatchToProps)(PortfolioContainer);

PortfolioContainer.propTypes = {
  onGetPortfolioData: PropTypes.func.isRequired
};
