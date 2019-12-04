import { API_TOKEN, DATABASE_URL, DATABASE_PORT } from 'react-native-dotenv';

import actions from 'actions/watchlists';

const databaseUrl = `http://${DATABASE_URL}:${DATABASE_PORT}`;
const apiUrl = 'https://cloud.iexapis.com/stable';

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

async function getDataFromDB(url) {
  const dbResponse = await fetch(url, {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: 'Bearer token'
    }
  });
  const dbData = await dbResponse.json();
  return dbData.watchlists.map(data => ({
    symbols: data.symbols
  }));
}

async function requestApiOnce(request) {
  const apiResponse = await fetch(request);
  const apiData = await apiResponse.json();
  return apiData;
}

function getDataFromApi(symbolsList) {
  return new Promise(resolve => {
    const watchlists = [];
    symbolsList.forEach(async ({ symbols }, index) => {
      const apiData = await requestApiOnce(
        `${apiUrl}/stock/market/batch/?token=${API_TOKEN}&symbols=${symbols}&types=quote`
      );
      watchlists.push({
        index,
        apiData
      });
      if (watchlists.length === symbolsList.length) {
        resolve(watchlists);
      }
    });
  });
}

function changeUnit(number) {
  const units = [
    { unit: '', base: 1 },
    { unit: 'K', base: 1000 },
    { unit: 'M', base: 1000000 },
    { unit: 'B', base: 1000000000 },
    { unit: 'T', base: 1000000000000 }
  ];
  const stringNumber = number.toString();
  const index = Math.floor((stringNumber.length - 1) / 3);
  return `${(stringNumber / units[index].base).toFixed(1)}${units[index].unit}`;
}

function generateInfo(symbolList, list) {
  return symbolList.map(symbol => {
    const { latestPrice, changePercent, marketCap, week52High, week52Low, peRatio } = list[
      symbol
    ].quote;
    return {
      symbol,
      latestPrice,
      changePercent: `${changePercent.toFixed(4) * 100}`,
      marketCap: changeUnit(marketCap),
      week52High,
      week52Low,
      peRatio,
      eps: '1.2',
      divYield: '2%',
      chartData: [
        { x: 1, y: 8 },
        { x: 2, y: 7 },
        { x: 3, y: 5 }
      ]
    };
  });
}

function generateWatchlists(symbolsList, data) {
  return symbolsList.map(({ symbols }, index) => {
    symbolList = symbols.split(',');
    const list = data.filter(dataList => dataList.index === index)[0].apiData;
    return generateInfo(symbolList, list);
  });
}

function getWatchlistData() {
  return async dispatch => {
    try {
      const symbolsList = await getDataFromDB(`${databaseUrl}/watchlists`);
      const requestApi = await getDataFromApi(symbolsList);
      const watchlists = generateWatchlists(symbolsList, requestApi);
      console.log(watchlists);
      dispatch(actions.getWatchlistData(lists));
    } catch (error) {
      console.log(error);
    }
  };
}

export default {
  getWatchlistData
};
