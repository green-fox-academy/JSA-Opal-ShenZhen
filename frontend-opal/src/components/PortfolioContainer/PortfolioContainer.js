import React, { useEffect } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, CardItem } from 'native-base';
import thunksUserPortfolioInfo from 'thunks/userPortfolioInfo';

import styles from './styles';

import ValueInfo from './ValueInfo';
import AllocationInfo from './AllocationInfo';
import Instruments from './Instruments';

const PortfolioContainer = ({ onfetchPortfolioEndpoint }) => {
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
    onfetchPortfolioEndpoint: () => dispatch(thunksUserPortfolioInfo.fetchPortfolioEndpoint())
  };
};

export default connect(null, mapDispatchToProps)(PortfolioContainer);

PortfolioContainer.propTypes = {
  onfetchPortfolioEndpoint: PropTypes.func.isRequired
};
