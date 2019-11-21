import React from 'react';
import renderer from 'react-test-renderer';

import Header from 'components/search-result/Header';

const Jasmine = require('jasmine')

describe('<Header />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
