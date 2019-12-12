import React, { useEffect, useContext } from 'react';
import { Tab, Tabs } from 'native-base';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { NavigationContext } from 'react-navigation';
import PropTypes from 'prop-types';

import BuyContainer from 'components/trade/BuyContainer';
import SellContainer from 'components/trade/SellContainer';
import thunks from 'thunks/instrumentDetail';
import actions from 'actions/instrumentDetail';
import presetProps from 'components/InstrumentDetail/presetProps';

const styles = StyleSheet.create({
  tabs: {
    zIndex: 10
  },
  tabBarUnderlineStyle: {
    backgroundColor: 'rgb(250,110,59)'
  },
  tabStyle: {
    backgroundColor: 'white'
  },
  textStyle: {
    color: 'rgb(250,110,59)'
  },
  activeTabStyle: {
    backgroundColor: 'white'
  }
});

function TabbedComponents({ fetchData, clearData, chartData }) {
  const navigation = useContext(NavigationContext);

  useEffect(() => {
    fetchData(navigation.getParam('detailTitle'));
    return () => {
      clearData();
    };
  }, [fetchData]);

  return (
    <Tabs style={styles.tabs} tabBarUnderlineStyle={styles.tabBarUnderlineStyle}>
      <Tab
        heading="BUY"
        key="1"
        tabStyle={styles.tabStyle}
        textStyle={styles.textStyle}
        activeTabStyle={styles.activeTabStyle}
        activeTextStyle={styles.textStyle}
      >
        <BuyContainer chartData={chartData} />
      </Tab>

      <Tab
        heading="SELL"
        key="sell"
        tabStyle={styles.tabStyle}
        textStyle={styles.textStyle}
        activeTabStyle={styles.activeTabStyle}
        activeTextStyle={styles.textStyle}
      >
        <SellContainer chartData={chartData} />
      </Tab>
    </Tabs>
  );
}

TabbedComponents.defaultProps = {
  fetchData: null,
  clearData: null,
  chartData: []
};

TabbedComponents.propTypes = {
  fetchData: PropTypes.func,
  clearData: PropTypes.func,
  chartData: presetProps.chartDataTypes
};

const mapStateToProps = ({ instrumentDetail }) => ({
  chartData: instrumentDetail.chartData
});

const mapDispatchToProps = dispatch => ({
  fetchData: symbol => dispatch(thunks.getInstrumentDetailData(symbol)),
  clearData: () => dispatch(actions.clearDetailData())
});

export default connect(mapStateToProps, mapDispatchToProps)(TabbedComponents);
