import React from 'react';
import renderer from 'react-test-renderer';

import ChartDetail from '../../components/ChartDetail/ChartDetail';

describe('<ChartDetail />', () => {
  it('renders correctly', () => {
    const chartData = [
      { x: 1, y: 8 },
      { x: 2, y: 7 },
      { x: 3, y: 5 },
    ];

    const stockData = {
      '52 wk low': '231.6',
      '52 wk high': '250.7',
      'P/E': '20.3',
      EPS: '1.2',
      DivYield: '2.34%',
    };
    const tree = renderer.create(<ChartDetail
      stockData={stockData}
      chartData={chartData}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
