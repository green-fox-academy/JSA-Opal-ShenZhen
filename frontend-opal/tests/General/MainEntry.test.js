import React from 'react';
import renderer from 'react-test-renderer';
import MainEntry from 'components/MainEntry';

describe('<MainEntry />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<MainEntry />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
