import React, { useEffect } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import thunks from 'thunks/portfolio';

import styles from './styles';

import ValueInfo from './ValueInfo';
import AllocationInfo from './AllocationInfo';
import Instruments from './Instruments';

const PortfolioContainer = ({ portfolio, onGetPortfolioData }) => {
  useEffect(() => onGetPortfolioData(), [onGetPortfolioData]);

  return (
    <>
      {portfolio[0] !== undefined && (
        <View style={styles.portfolioArea}>
          <ValueInfo totalInvestment={portfolio[0].totalInvestment} />

          <AllocationInfo
            pieData={portfolio[0].pieData}
            pieColor={portfolio[0].pieColor}
            legendData={portfolio[0].legendData}
          />

          <Instruments instrumentList={portfolio[0].instrumentsList} />
        </View>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

const mapDispatchToProps = dispatch => {
  return {
    onGetPortfolioData: () => dispatch(thunks.getPortfolioData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer);

PortfolioContainer.propTypes = {
  portfolio: PropTypes.arrayOf(
    PropTypes.shape({
      totalInvestment: PropTypes.string,
      pieData: PropTypes.arrayOf(
        PropTypes.shape({
          x: PropTypes.string,
          y: PropTypes.number,
          label: PropTypes.string
        })
      ),
      legendData: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          symbol: PropTypes.objectOf(PropTypes.string)
        })
      ),
      pieColor: PropTypes.arrayOf(PropTypes.string),
      instrumentsList: PropTypes.arrayOf(
        PropTypes.shape({
          company: PropTypes.string,
          stockExchange: PropTypes.string,
          profileImg: PropTypes.any,
          positions: PropTypes.number,
          marketValue: PropTypes.number,
          unrlzedPLPercentage: PropTypes.string,
          unrlzedPL: PropTypes.number
        })
      )
    })
  ).isRequired,
  onGetPortfolioData: PropTypes.func.isRequired
};
