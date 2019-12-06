import React, { useEffect } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Accordion } from 'native-base';

import WatchListItem from 'components/WatchList/WatchListItem/WatchListItem';
import thunks from 'thunks/watchlists';
import actions from 'actions/watchlists';

const WatchList = ({ watchlists, getLists, closeInstrumentsInList }) => {
  useEffect(() => {
    getLists();
  }, [getLists]);

  const dataArray = watchlists.map(list => ({
    ...list,
    title: `Watchlist ${list.index + 1}`
  }));

  return (
    <SafeAreaView>
      <ScrollView>
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
