import actions from 'actions/portfolio';

const investment = {
  totalInvestment: '3400',
  pieData: [
    { x: 'IT', y: 40, label: '40%' },
    { x: 'Finance', y: 30, label: '30%' },
    { x: 'Energy', y: 30, label: '30%' }
  ],
  legendData: [
    { name: 'IT', symbol: { type: 'square' } },
    { name: 'Finance', symbol: { type: 'square' } },
    { name: 'Energy', symbol: { type: 'square' } }
  ],
  pieColor: ['#711702', '#A91600', '#E12C00'],
  instrumentList: [
    {
      company: 'FB - Facebook Inc.',
      stockExchange: 'NASDAQ',
      /* eslint-disable-next-line */
      profileImg: require('components/PortfolioContainer/Instruments/images/avatarPlaceholder.png'),
      positions: 136,
      marketValue: 11863.28,
      unrlzedPLPercentage: '4.5%',
      unrlzedPL: 510.86
    }
  ]
};

function getPortfolioData() {
  return dispatch => {
    dispatch(actions.getPortfolioData(investment));
  };
}

export default {
  getPortfolioData
};
