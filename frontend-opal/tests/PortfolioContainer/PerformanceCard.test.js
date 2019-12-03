import React from 'react';
import renderer from 'react-test-renderer';
import PerformanceCard from 'components/PortfolioContainer/InstrumentDetail/PerformanceCard';

describe('PerformanceCard Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<PerformanceCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
