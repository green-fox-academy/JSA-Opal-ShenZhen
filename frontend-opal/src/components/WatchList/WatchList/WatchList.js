import React, { useEffect, useCallback, useState } from 'react';
import { View, SafeAreaView, ScrollView, Text, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Accordion, Spinner } from 'native-base';

import WatchListItem from 'components/WatchList/WatchListItem/WatchListItem';
import thunks from 'thunks/watchlists';
import actions from 'actions/watchlists';
import tools from 'components/common/tools';

const WatchList = ({ watchlists, getLists, closeInstrumentsInList }) => {
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getLists();
  }, [getLists]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await getLists();
    setRefreshing(false);
  }, [getLists]);

  const dataArray = watchlists.map(list => ({
    ...list,
    title: `Watchlist ${list.index + 1}`
  }));

  return (
    <SafeAreaView>
      <ScrollView style={{width: '100%' ,height: '100%'}} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['rgb(77,119,245)']}/>}>
        {watchlists.length === 0 ? (
          <View style={{ display: 'flex', alignItems: 'center' }}>
            <Spinner color='rgb(77,119,245)' />
            <Text style={{ color: 'rgb(77,119,245)', fontSize: tools.getPixel(16) }}>Loading</Text>
          </View>
        ) : (
          <View>
            <Accordion
              dataArray={dataArray}
              renderContent={WatchListItem}
              headerStyle={{ backgroundColor: 'white', fontWeight: 'bold' }}
              onAccordionClose={() => {
                watchlists.forEach(list => {
                  closeInstrumentsInList(list.index);
                });
              }}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

WatchList.propTypes = {
  watchlists: PropTypes.arrayOf(PropTypes.object).isRequired,
  getLists: PropTypes.func.isRequired,
  closeInstrumentsInList: PropTypes.func.isRequired
};

const mapStateToProps = ({ watchlists = [] }) => ({ watchlists });

const mapDispatchToProps = dispatch => ({
  getLists: () => dispatch(thunks.getWatchlistData()),
  closeInstrumentsInList: index => dispatch(actions.closeInstrumentsInList(index))
});

WatchList.title = 'WATCHLIST';

export default connect(mapStateToProps, mapDispatchToProps)(WatchList);
