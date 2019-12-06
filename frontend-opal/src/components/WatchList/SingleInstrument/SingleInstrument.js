import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import InstrumentRow from 'components/WatchList/InstrumentRow/InstrumentRow';
import ChartDetail from 'components/WatchList/ChartDetail/ChartDetail';
import presetProps from 'components/WatchList/presetProps';
import actions from 'actions/watchlists';
import styles from './styles';

function SingleInstrument({ data, index, toggleOneInstrument }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => toggleOneInstrument(index, data.symbol)}>
        <InstrumentRow data={data} />
      </TouchableOpacity>
      {data.foldStatus && <ChartDetail data={data} />}
    </View>
  );
}

SingleInstrument.defaultProps = {
  data: presetProps.defaultQuote,
  index: 0,
  toggleOneInstrument: null
};

SingleInstrument.propTypes = {
  data: presetProps.quoteTypes,
  index: PropTypes.number,
  toggleOneInstrument: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  toggleOneInstrument: (index, symbol) => dispatch(actions.toggleOneInstrument(index, symbol))
});

export default connect(null, mapDispatchToProps)(SingleInstrument);
