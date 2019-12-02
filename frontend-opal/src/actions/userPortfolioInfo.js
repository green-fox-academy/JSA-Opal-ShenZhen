const fetchPortfolioEndpoint = data => ({
  type: 'FETCH_PORTFOLIO_DONE',
  userPortfolioInfo: data
})

export default {
  fetchPortfolioEndpoint
};