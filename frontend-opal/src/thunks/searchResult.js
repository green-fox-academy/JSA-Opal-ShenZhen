import actions from 'actions/searchResult';

import symbolData from './symbolData';
import stockAPI from './stockAPI';

async function extractTopNResult({ first, second }, num) {
  return [...first, ...second].slice(0, num);
}

async function searchData(input) {
  const target = String(input).toUpperCase();
  // use real api fetch data of instrument
  // const apiData = await stockAPI.fetchData();

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
  return async dispatch => {
    const data = {
      results: []
    };
    if (input !== '') {
      const searchRes = await searchData(input);
      data.results = mapTitle(searchRes);
    }

    dispatch(actions.search(data));
  };
}

export default {
  search
};
