import PropTypes from 'prop-types';

const defaultQuote = {
  symbol: '',
  latestPrice: 0,
  changePercent: '',
  marketCap: '',
  week52High: 0,
  week52Low: 0,
  peRatio: 0,
  eps: '',
  divYield: '',
  chartData: []
};

const quoteTypes = PropTypes.shape({
  symbol: PropTypes.string,
  latestPrice: PropTypes.number,
  changePercent: PropTypes.string,
  marketCap: PropTypes.string,
  week52High: PropTypes.number,
  week52Low: PropTypes.number,
  peRatio: PropTypes.number,
  eps: PropTypes.string,
  divYield: PropTypes.string,
  chartData: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      y: PropTypes.number
    })
  )
});

export default {
  defaultQuote,
  quoteTypes
};
