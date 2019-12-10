import { DATABASE_URL, DATABASE_PORT } from 'react-native-dotenv';

import actions from 'actions/portfolio';
import stockAPI from './stock_API';

async function getInstrument(endpointRes, stockRes) {
  return endpointRes.portfolio.map(instrument =>
    Object.assign(
      instrument,
      { company: stockRes[instrument.symbol].quote.companyName },
      { stockExchange: stockRes[instrument.symbol].quote.primaryExchange },
      { marketValue: stockRes[instrument.symbol].quote.latestPrice },
      { profileImg: stockRes[instrument.symbol].logo.url },
      { sector: stockRes[instrument.symbol].company.sector }
    )
  );
}

const fetchPortfolio = () => {
  return async dispatch => {
    dispatch({
      type: 'FETCH_PORTFOLIO_ENDPOINT'
    });

    const response = await fetch(`http://${DATABASE_URL}:${DATABASE_PORT}/portfolio`, {
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer token'
      }
    });

    const endpointRes = await response.json();
    const symbols = await endpointRes.portfolio.map(instrument => instrument.symbol).join(',');
    const stockRes = await stockAPI.fetchPortfolioData(symbols);
    const instruments = await getInstrument(endpointRes, stockRes);
    dispatch(actions.fetchPortfolio([...instruments]));
  };
};

export default {
  fetchPortfolio
};
