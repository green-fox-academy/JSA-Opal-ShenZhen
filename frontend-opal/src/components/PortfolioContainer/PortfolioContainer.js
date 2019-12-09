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

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

const PortfolioContainer = ({ fetchPortfolio }) => {
  useEffect(() => {
    fetchPortfolio();
  }, [fetchPortfolio]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);

  return (
    <SafeAreaView>
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <View style={styles.portfolioArea}>
          <Card transparent>
            <ValueInfo />
            <AllocationInfo />
            <Instruments />
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

PortfolioContainer.title = 'PORTFOLIO';

const mapDispatchToProps = dispatch => {
  return {
    fetchPortfolio: () => dispatch(thunk.fetchPortfolio())
  };
};

export default connect(null, mapDispatchToProps)(PortfolioContainer);

PortfolioContainer.propTypes = {
  fetchPortfolio: PropTypes.func.isRequired
};
