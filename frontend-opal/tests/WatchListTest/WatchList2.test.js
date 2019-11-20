import React from 'react';
import renderer from 'react-test-renderer';

import WatchList2 from '../../components/WachList2/index';

describe('<WatchList2 />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<WatchList2 />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
