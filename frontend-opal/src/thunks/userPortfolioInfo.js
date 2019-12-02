import actions from 'actions/userPortfolioInfo';

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
      .then(res => res.json())
      .then(res => {
        dispatch(actions.fetchPortfolioEndpoint(res));
      })
      .catch(error => {
        return 'error';
      });
  };
};

export default {
  fetchPortfolioEndpoint
};
