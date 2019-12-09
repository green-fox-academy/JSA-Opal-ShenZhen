import { API_TOKEN } from 'react-native-dotenv';

const baseUrl = 'https://cloud.iexapis.com/';

async function fetchSearchData() {
  const symbols = `${baseUrl}stable/ref-data/symbols?token=${API_TOKEN}`;
  const res = await fetch(symbols);
  const data = await res.json();
  return data;
}

async function fetchPortfolioData(symbols) {
  const apiUrl = `${baseUrl}stable/stock/market/batch?symbols=${symbols}&types=quote,news,company,logo&range=1m&last=5&token=${API_TOKEN}`;
  const res = await fetch(apiUrl);
  const data = await res.json();
  return data;
}

async function fetchInstrumentDetailData(symbol) {
  const apiUrl = `${baseUrl}stable/stock/${symbol}/quote?token=${API_TOKEN}`;
  const res = await fetch(apiUrl);
  const data = await res.json();
  return data;
}

const stockAPI = {
  fetchSearchData,
  fetchPortfolioData,
  fetchInstrumentDetailData
};

export default stockAPI;
