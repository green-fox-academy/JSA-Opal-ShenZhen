import React from 'react';
import renderer from 'react-test-renderer';

import SingleInstrument from 'components/WatchList/SingleInstrument/SingleInstrument';
import presetProps from 'components/WatchList/presetProps';

describe('<SingleInstrument />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SingleInstrument infos={presetProps.defaultQuote} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
