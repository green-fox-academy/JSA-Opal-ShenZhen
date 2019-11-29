import React from 'react';
import renderer from 'react-test-renderer';
import WatchListItem from '../../src/components/WatchList/WatchListItem/WatchListItem';

describe('<WatchListItem />', () => {
  it('renders correctly', () => {
    const info = [
      {
        name: 'MSFT',
        num: '141.21',
        increase: '+0.23',
        whole: '1.2M'
      },
      {
        name: 'AMZN',
        num: '2108.2',
        increase: '-0.06',
        whole: '609K'
      },
      {
        name: 'AAPL',
        num: '250.7',
        increase: '+1.63',
        whole: '810K'
      }
    ];
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
      .create(<WatchListItem info={info} stockData={stockData} chartData={chartData} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
