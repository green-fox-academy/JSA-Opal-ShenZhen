import React from 'react';
import renderer from 'react-test-renderer';

import WatchListContainer from '../../components/WatchListContainer/WatchListContainer';

describe('<WatchListContainer />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<WatchListContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
