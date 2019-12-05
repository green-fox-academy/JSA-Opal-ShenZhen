const fetchPortfolio = data => {
  return {
    type: 'FETCH_PORTFOLIO_DONE',
    fetchPortfolio: data
  };
};

export default {
  fetchPortfolio
};
