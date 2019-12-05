import actions from 'actions/userPortfolioInfo';
import { API_TOKEN } from 'react-native-dotenv';

const fetchPortfolioEndpoint = () => {
  return dispatch => {
    dispatch({
      type: 'FETCH_PORTFOLIO_ENDPOINT'
    });
    fetch('http://10.22.19.55:3001/portfolio', {
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer token'
      }
    })
      .then(endpointRes => endpointRes.json())
      .then(endpointRes => {
        dispatch(actions.fetchPortfolio(endpointRes.portfolio));
        const symbols = endpointRes.portfolio.map(instrument => instrument.symbol).join(',');
        fetch(
          `https://cloud.iexapis.com/stable/stock/market/batch?symbols=${symbols}&types=quote,news,company&range=1m&last=5&token=${API_TOKEN}`
        )
          .then(stockRes => stockRes.json())
          .then(stockRes => {
            const instruments = endpointRes.portfolio.map(instrument =>
              Object.assign(
                instrument,
                { company: stockRes[instrument.symbol].quote.companyName },
                { stockExchange: stockRes[instrument.symbol].quote.primaryExchange },
                { marketValue: stockRes[instrument.symbol].quote.latestPrice },
                {
                  /* eslint-disable-next-line */
                  profileImg: require('components/PortfolioContainer/Instruments/images/avatarPlaceholder.png')
                },
                { sector: stockRes[instrument.symbol].company.sector }
              )
            );

            dispatch(actions.fetchPortfolio({ instruments }));
          });
      })
      .catch(error => {
        return 'error';
      });
  };
};

export default {
  fetchPortfolioEndpoint
};
