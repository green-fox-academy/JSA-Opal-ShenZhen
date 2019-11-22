import React from 'react';
import renderer from 'react-test-renderer';

import AllocationInfo from '../../src/components/PortfolioContainer/AllocationInfo';

const pieData = [
  { x: 'IT', y: 40, label: '40%' },
  { x: 'Finance', y: 30, label: '30%' },
  { x: 'Energy', y: 30, label: '30%' }
];
const legendData = [
  { name: 'IT', symbol: { type: 'square' } },
  { name: 'Finance', symbol: { type: 'square' } },
  { name: 'Energy', symbol: { type: 'square' } }
];
const pieColor = ['#711702', '#A91600', '#E12C00'];

describe('<Header />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<AllocationInfo pieData={pieData} pieColor={pieColor} legendData={legendData} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
