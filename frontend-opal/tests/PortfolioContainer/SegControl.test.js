import React from 'react';
import renderer from 'react-test-renderer';
import SegControl from 'components/SegControl/SegControl';

describe('<SegControl />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SegControl />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
