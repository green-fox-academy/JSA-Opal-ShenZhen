import React from 'react';
import renderer from 'react-test-renderer';
import SegControl from '~/src/components/SegControl';

describe('<Header />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SegControl />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
