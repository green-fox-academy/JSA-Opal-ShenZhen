import React from 'react';
import renderer from 'react-test-renderer';

import WatchList from '../../components/WatchList/WatchList';

describe('<WatchList />', () => {
  it('renders correctly', () => {
    const info = [{
      name: 'MSFT', num: '141.21', increase: '+0.23', whole: '1.2M',
    },
    {
      name: 'AMZN', num: '2108.2', increase: '-0.06', whole: '609K',
    },
    {
      name: 'AAPL', num: '250.7', increase: '+1.63', whole: '810K',
    }];

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

    const watchlistArr = ['my watchlist1', 'my watchlist2'];
    const tree = renderer.create(<WatchList
      watchlistArr={watchlistArr}
      info={info}
      stockData={stockData}
      chartData={chartData}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
