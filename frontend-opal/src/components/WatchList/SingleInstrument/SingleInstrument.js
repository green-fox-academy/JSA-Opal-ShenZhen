import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import InstrumentRow from 'components/WatchList/InstrumentRow/InstrumentRow';
import ChartDetail from 'components/WatchList/ChartDetail/ChartDetail';
import presetProps from 'components/WatchList/presetProps';

function SingleInstrument({ data }) {
  const [more, setMore] = useState(false);

  return (
    <>
      <TouchableOpacity onPress={() => setMore(!more)}>
        <InstrumentRow data={data} />
      </TouchableOpacity>
      {more && <ChartDetail data={data} />}
    </>
  );
}

SingleInstrument.defaultProps = {
  data: presetProps.defaultQuote
};

SingleInstrument.propTypes = {
  data: presetProps.quoteTypes
};

export default SingleInstrument;
