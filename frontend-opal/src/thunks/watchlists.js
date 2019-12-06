import { API_TOKEN, DATABASE_URL, DATABASE_PORT } from 'react-native-dotenv';

import actions from 'actions/watchlists';
import presetProps from 'components/WatchList/presetProps';

const databaseUrl = `http://${DATABASE_URL}:${DATABASE_PORT}`;
const apiUrl = 'https://cloud.iexapis.com/stable';

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
  try {
    const apiResponse = await fetch(request); 
    const apiData = await apiResponse.json();
    return apiData;
  } catch (error) {
    console.log(error);
  }
  return [[presetProps.defaultQuote]];
}

function getDataFromApi(symbolsList) {
  return new Promise(resolve => {
    const watchlists = [];
    symbolsList.forEach(async ({ symbols }, index) => {
      const apiData = await requestApiOnce(
        `${apiUrl}/stock/market/batch/?token=${API_TOKEN}&symbols=${symbols}&types=quote,chart&range=3m`
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

function generateCharData(charts) {
  const points = [];
  for (let i = charts.length - 1; i >= 0; i -= 6) {
    points.unshift({
      x: String(charts[i].label.split(',')[0]),
      y: Number(charts[i].close)
    });
  }
  return points;
}

function generateInfo(symbolList, list) {
  return symbolList.map(symbol => {
    const { latestPrice, changePercent, marketCap, week52High, week52Low, peRatio } = list[
      symbol
    ].quote;
    return {
      symbol,
      latestPrice,
      changePercent: changePercent,
      marketCap: changeUnit(marketCap),
      week52High,
      week52Low,
      peRatio,
      eps: '1.2',
      divYield: '2%',
      chartData: generateCharData(list[symbol].chart),
      foldStatus: false
    };
  });
}

function generateWatchlists(symbolsList, data) {
  return symbolsList.map(({ symbols }, index) => {
    const symbolList = symbols.split(',');
    const list = data.filter(dataList => dataList.index === index)[0].apiData;
    return {
      index,
      data: generateInfo(symbolList, list)
    };
  });
}

function getWatchlistData() {
  return async dispatch => {
    try {
      const symbolsList = await getDataFromDB(`${databaseUrl}/watchlists`);
      const requestApi = await getDataFromApi(symbolsList);
      const watchlists = generateWatchlists(symbolsList, requestApi);
      dispatch(actions.getWatchlistData(watchlists));
    } catch (error) {
      console.log(error);
    }
  };
}

export default {
  getWatchlistData
};
