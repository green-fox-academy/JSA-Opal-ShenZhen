import React, { useEffect, useState, useCallback } from 'react';
import { View, SafeAreaView, ScrollView, Text, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Accordion, Fab, Icon, Spinner } from 'native-base';

import WatchListItem from 'components/WatchList/WatchListItem/WatchListItem';
import thunks from 'thunks/watchlists';
import actions from 'actions/watchlists';
import NewWatchlistModal from './NewWatchlistModal';
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

  const [isModalVisible, toggleModal] = useState(false);

  return (
    <SafeAreaView style={{ width: '100%', height: '100%' }}>
      <ScrollView
        style={{ width: '100%', height: '100%' }}
        refreshControl={
          /* eslint-disable-next-line */
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#e17055']}
          />
        }
      >
        {watchlists.length === 0 ? (
          <View style={{ display: 'flex', alignItems: 'center' }}>
            <Spinner color="#e17055" />
            <Text style={{ color: '#e17055', fontSize: tools.getPixel(16) }}>Loading</Text>
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
      <View>
        <Fab onPress={() => toggleModal(!isModalVisible)} style={{ backgroundColor: '#e17055' }}>
          <Icon type="FontAwesome" name="plus" />
        </Fab>
      </View>
      <NewWatchlistModal isModalVisible={isModalVisible} toggleModal={toggleModal} />
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
