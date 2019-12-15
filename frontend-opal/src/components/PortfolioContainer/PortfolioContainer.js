import React, { useEffect } from 'react';
import { View, SafeAreaView, ScrollView, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card } from 'native-base';
import thunk from 'thunks/portfolio';

import styles from './styles';
import ValueInfo from './ValueInfo';
import AllocationInfo from './AllocationInfo';
import Instruments from './Instruments';
import News from './News';

const PortfolioContainer = ({ fetchPortfolio }) => {
  useEffect(() => {
    fetchPortfolio();
  }, [fetchPortfolio]);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await fetchPortfolio();
    setRefreshing(false);
  }, [fetchPortfolio]);

  return (
    <SafeAreaView>
      <ScrollView
        refreshControl={
          /* eslint-disable-next-line */
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['rgb(250,110,59)']}
          />
        }
      >
        <View style={styles.portfolioArea}>
          <Card transparent>
            <ValueInfo />
            <AllocationInfo />
            <Instruments />
            <News />
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

PortfolioContainer.title = 'DASHBOARD';

const mapDispatchToProps = dispatch => {
  return {
    fetchPortfolio: () => dispatch(thunk.fetchPortfolio())
  };
};

export default connect(null, mapDispatchToProps)(PortfolioContainer);

PortfolioContainer.propTypes = {
  fetchPortfolio: PropTypes.func.isRequired
};
