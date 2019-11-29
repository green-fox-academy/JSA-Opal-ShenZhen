const getPortfolioData = data => ({
  type: 'GET_PORTFOLIO_DATA',
  payload: {
    data
  }
});

export default {
  getPortfolioData
};
