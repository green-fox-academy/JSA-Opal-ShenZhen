import { API_TOKEN } from 'react-native-dotenv';

import actions from 'actions/watchlists';

const databaseUrl = 'localhost:3001';

const lists = [];
for (let i = 0; i < 3; i += 1) {
  lists.push({
    info: [
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
    ],
    chartData: [
      { x: 1, y: 8 },
      { x: 2, y: 7 },
      { x: 3, y: 5 }
    ],
    stockData: [
      { name: '52 wk low', value: '231.6' },
      { name: '52 wk high', value: '250.7' },
      { name: 'P/E', value: '20.3' },
      { name: 'EPS', value: '1.2' },
      { name: 'DivYield', value: '2.34%' }
    ]
  });
}

function getWatchlistData() {
  return async dispatch => {
    const dbResponse = await fetch(`${databaseUrl}/watchlists`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authentication: 'Bearer token'
      }
    });
    const dbData = await dbResponse.json();
    console.log(dbData);
    dispatch(actions.getWatchlistData(lists));
  };
}

export default {
  getWatchlistData
};
