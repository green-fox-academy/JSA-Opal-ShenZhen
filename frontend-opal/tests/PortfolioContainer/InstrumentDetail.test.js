import React from 'react';
import renderer from 'react-test-renderer';
import InstrumentDetail from 'components/PortfolioContainer/InstrumentDetail';

describe('InstrumentDetail component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<InstrumentDetail />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
