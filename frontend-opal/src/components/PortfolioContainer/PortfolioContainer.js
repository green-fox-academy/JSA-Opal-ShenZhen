import React, { useEffect } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, CardItem } from 'native-base';
import thunksPortfolio from 'thunks/portfolio';
import thunksUserPortfolioInfo from 'thunks/userPortfolioInfo';

import styles from './styles';

import ValueInfo from './ValueInfo';
import AllocationInfo from './AllocationInfo';
import Instruments from './Instruments';

const PortfolioContainer = ({ onGetPortfolioData, onfetchPortfolioEndpoint }) => {
  useEffect(() => onGetPortfolioData(), [onGetPortfolioData]);
  useEffect(() => onfetchPortfolioEndpoint(), [onfetchPortfolioEndpoint]);

  return (
    <>
      <View style={styles.portfolioArea}>
        <Card transparent>
          <CardItem>
            <ValueInfo />
          </CardItem>
          <CardItem>
            <AllocationInfo />
          </CardItem>
          <CardItem>
            <Instruments />
          </CardItem>
        </Card>
      </View>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onGetPortfolioData: () => dispatch(thunksPortfolio.getPortfolioData()),
    onfetchPortfolioEndpoint: () => dispatch(thunksUserPortfolioInfo.fetchPortfolioEndpoint())
  };
};

export default connect(null, mapDispatchToProps)(PortfolioContainer);

PortfolioContainer.propTypes = {
  onGetPortfolioData: PropTypes.func.isRequired,
  onfetchPortfolioEndpoint: PropTypes.func.isRequired
};
