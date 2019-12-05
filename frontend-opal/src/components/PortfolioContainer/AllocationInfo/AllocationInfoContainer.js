import { connect } from 'react-redux';
import palette from 'google-palette';
import getTotalInvestment from 'components/common/getTotalInvestment';
import presenter from './AllocationInfoPresenter';

const mapStateToProps = ({ portfolio: { instruments } }) => {
  let sectors = {};
  let totalInvestment = '';
  if (instruments) {
    totalInvestment = getTotalInvestment(instruments);
  }

  if (instruments) {
    sectors = instruments.reduce((sectorsList, instrument) => {
      const result = sectorsList;
      if (result[instrument.sector]) {
        result[instrument.sector].list.push(instrument);
      } else {
        result[instrument.sector] = { list: [instrument] };
      }
      return result;
    }, {});
  }

  const legendData = Object.keys(sectors).map(sector => ({
    name: sector,
    symbol: { type: 'square' }
  }));

  if (Object.keys(sectors).length !== 0) {
    Object.keys(sectors).forEach(sector => {
      sectors[sector].value =
        (
          sectors[sector].list.reduce((accumulativeValue, instrument) => {
            let result = accumulativeValue;
            result += instrument.amount * instrument.marketValue;
            return result;
          }, 0) / totalInvestment
        ).toFixed(2) * 100;
    });
  }

  const pieData = Object.keys(sectors).map(sector => ({
    x: sector,
    y: sectors[sector].value,
    label: `${sectors[sector].value}%`
  }));

  let pieColor = palette('tol-sq', Object.keys(sectors).length + 2);
  pieColor = pieColor.slice(2).map(color => `#${color}`);

  return { pieData, pieColor, legendData };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPortfolio: () => dispatch(thunk.fetchPortfolio())
  };
};

const getAllocationInfo = connect(mapStateToProps, mapDispatchToProps)(presenter);
export default getAllocationInfo;