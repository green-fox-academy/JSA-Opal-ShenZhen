import React from 'react';
import renderer from 'react-test-renderer';

import ChartDetail from '../../src/components/WatchList/ChartDetail/ChartDetail';

describe('<ChartDetail />', () => {
  it('renders correctly', () => {
    const chartData = [
      { x: 1, y: 8 },
      { x: 2, y: 7 },
      { x: 3, y: 5 }
    ];

    const stockData = [
      { name: '52 wk low', value: '231.6' },
      { name: '52 wk high', value: '250.7' },
      { name: 'P/E', value: '20.3' },
      { name: 'EPS', value: '1.2' },
      { name: 'DivYield', value: '2.34%' }
    ];
    const tree = renderer
      .create(<ChartDetail stockData={stockData} chartData={chartData} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
