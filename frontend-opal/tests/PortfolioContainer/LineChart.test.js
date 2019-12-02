import React from 'react';
import renderer from 'react-test-renderer';
import LineChart from 'components/PortfolioContainer/LineChart';

describe('LineChart component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<LineChart />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
