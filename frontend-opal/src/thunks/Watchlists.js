import actions from 'actions/Watchlists';

const lists = [
  {
    data: {
      '52 wk low': '231.6',
      '52 wk high': '250.7',
      'P/E': '20.3',
      EPS: '1.2',
      DivYield: '2.34%'
    },
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
    ]
  }
];

function getWatchlistData(listId) {
  return dispatch => {
    dispatch(actions.getWatchlistData(lists[listId]));
  };
}

export default {
  getWatchlistData
};
