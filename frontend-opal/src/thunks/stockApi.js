import { API_TOKEN } from 'react-native-dotenv';

async function fetchSearchData() {
  const symbols = `https://cloud.iexapis.com/stable/ref-data/symbols?token=${API_TOKEN}`;
  const res = await fetch(symbols);
  const data = await res.json();
  return data;
}

async function fetchPortfolioData(symbols) {
  const apiUrl = `https://cloud.iexapis.com/stable/stock/market/batch?symbols=${symbols}&types=quote,news,company,logo&range=1m&last=5&token=${API_TOKEN}`;
  const res = await fetch(apiUrl);
  const data = await res.json();
  return data;
}

const stockAPI = {
  fetchSearchData, fetchPortfolioData
};

export default stockAPI;