import React, { useEffect } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import WatchListItem from 'components/WatchList/WatchListItem/WatchListItem';
import thunks from 'thunks/watchlists';

const WatchList = ({ watchlists, getLists }) => {
  useEffect(() => {
    getLists();
  }, [getLists]);

  return (
    <View>
      {watchlists.map((item, index) => (
        <WatchListItem
          key={`Watchlist${index + 1}`}
          item={`Watchlist${index + 1}`}
          stockData={item.stockData}
          chartData={item.chartData}
          info={item.info}
        />
      ))}
    </View>
  );
};

WatchList.propTypes = {
  watchlists: PropTypes.arrayOf(PropTypes.object).isRequired,
  getLists: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    watchlists: state.watchLists === undefined ? [] : state.watchLists
  };
};

const mapDispatchToProps = dispatch => ({
  getLists: () => dispatch(thunks.getWatchlistData())
});

WatchList.title = 'WATCHLIST';

export default connect(mapStateToProps, mapDispatchToProps)(WatchList);
