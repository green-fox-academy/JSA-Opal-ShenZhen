const fetchPortfolio = data => {
  return {
    type: 'FETCH_PORTFOLIO_DONE',
    portfolio: data
  };
};

export default {
  fetchPortfolio
};
