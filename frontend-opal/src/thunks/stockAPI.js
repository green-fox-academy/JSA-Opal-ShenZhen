import { API_TOKEN } from 'react-native-dotenv';

async function fetchData() {
  const symbols = `https://cloud.iexapis.com/stable/ref-data/symbols?token=${API_TOKEN}`;
  const res = await fetch(symbols);
  const data = await res.json();
  return data;
}

const stockAPI = {
  fetchData
};

export default stockAPI;
