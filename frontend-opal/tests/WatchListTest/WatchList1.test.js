import React from 'react';
import renderer from 'react-test-renderer';

import WatchList1 from '../../components/WatchList1/index';

describe('<WatchList1 />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<WatchList1 />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
