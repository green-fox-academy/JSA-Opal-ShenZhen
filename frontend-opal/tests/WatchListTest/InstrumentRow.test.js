import React from 'react';
import renderer from 'react-test-renderer';

import InstrumentRow from 'components/WatchList/InstrumentRow/InstrumentRow';
import presetProps from 'components/WatchList/presetProps';

describe('<InstrumentRow />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<InstrumentRow infos={presetProps.defaultQuote} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
