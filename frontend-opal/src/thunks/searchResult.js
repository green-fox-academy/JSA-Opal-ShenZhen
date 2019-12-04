import actions from 'actions/searchResult';

import { IEXCLOUD_PUBLIC_KEY } from 'react-native-dotenv';

import symbolData from './symbolData';

// const data = [
//   {
//     name: 'MS',
//     fullName: 'Morgan Stanley',
//     market: 'NYSE'
//   },
//   {
//     name: 'MSFT',
//     fullName: 'Microsoft Corp.',
//     market: 'NASDAQ'
//   },
//   {
//     name: 'FBMS',
//     fullName: 'First Branchshares Inc/MS',
//     market: 'NASDAQ'
//   }
// ];

async function fetchData() {
  const symbols = `https://cloud.iexapis.com/stable/ref-data/symbols?token=${IEXCLOUD_PUBLIC_KEY}`;
  const res = await fetch(symbols);
  const data = await res.json();
  return data;
}

function getExtractNum(data, num) {
  const len = data.second.length;
  return len / num > 1 ? num : len;
}

async function extractTopNResult(dataSet, num) {
  const res = [];
  // searchRes.first: 100% matched result; secondRes.second: partially matched results
  res.push(...dataSet.first);
  if (dataSet.second.length > 0) {
    const count = getExtractNum(dataSet, num);
    res.push(...dataSet.second.slice(0, count - 1));
  }
  return res;
}

async function searchData(input) {
  const target = String(input).toUpperCase();
  // use real api fetch data of instrument
  // const apiData = await fetchData();

  // use local data of instrument
  const apiData = symbolData;

  const targetLen = target.length;
  const reString = `(^${target}$)|(^${target})|(${target}$)`;
  const re = new RegExp(reString, 'gi');

  const dataSet = apiData
    .filter(item => item.symbol.match(re))
    .reduce(
      (obj, item) => {
        const res = obj;
        if (item.symbol.length === targetLen) {
          res.first.push(item);
        } else {
          res.second.push(item);
        }
        // item.symbol.length === targetLen ? res.first.push(item) : res.second.push(item);
        return res;
      },
      { first: [], second: [] }
    );

  return extractTopNResult(dataSet, 12);
}

function mapTitle(data) {
  const titleMap = { symbol: 'name', name: 'fullName', exchange: 'market' };
  const res = [];
  data.forEach(item => {
    const tmp = {};
    Object.keys(item).forEach(key => {
      tmp[titleMap[key]] = item[key];
    });
    res.push(tmp);
  });
  return res;
}

function search(input) {
  const initRes = {
    input,
    results: []
  };
  return async dispatch => {
    if (input !== '') {
      const searchRes = await searchData(input);
      const res = mapTitle(searchRes);

      dispatch(
        actions.search({
          input,
          results: res
        })
      );
    } else {
      dispatch(actions.search(initRes));
    }
  };
}

export default {
  search
};
