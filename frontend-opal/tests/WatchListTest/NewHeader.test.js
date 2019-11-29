import React from 'react';
import renderer from 'react-test-renderer';

import NewHeader from '../../src/components/WatchList/NewHeader/newHeader';

describe('<NewHeader />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<NewHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
