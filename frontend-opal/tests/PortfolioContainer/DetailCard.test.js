import React from 'react';
import renderer from 'react-test-renderer';
import DetailCard from 'components/PortfolioContainer/InstrumentDetail/DetailCard';

describe('DetailCard component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<DetailCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
