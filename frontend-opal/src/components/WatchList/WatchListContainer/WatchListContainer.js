import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import WatchList from '../WatchList/WatchList';

function WatchListContainer() {
  const watchlists = ['my watchlist1', 'my watchlist2'];

  return (
    <View>
      <WatchList watchlists={watchlists} />
    </View>
  );
}

export default connect(null, null)(WatchListContainer);
