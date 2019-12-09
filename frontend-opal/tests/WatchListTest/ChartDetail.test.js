import React from 'react';
import renderer from 'react-test-renderer';

import ChartDetail from 'components/WatchList/ChartDetail/ChartDetail';
import presetProps from 'components/WatchList/presetProps';

describe('<ChartDetail />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ChartDetail data={presetProps.defaultQuote} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
