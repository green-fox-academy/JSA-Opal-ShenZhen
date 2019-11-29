import React from 'react';
import renderer from 'react-test-renderer';

import WatchListContainer from '../../src/components/WatchList/WatchListContainer/WatchListContainer';

describe('<WatchListContainer />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<WatchListContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
