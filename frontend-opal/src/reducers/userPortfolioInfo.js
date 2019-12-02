const pairs = {
  FETCH_PORTFOLIO_DONE: (state, action) => {
    return {
      ...state,
      ...action.userPortfolioInfo
    };
  }
};

export default pairs;