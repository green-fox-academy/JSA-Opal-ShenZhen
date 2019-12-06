import { connect } from 'react-redux';
import getTotalInvestment from 'components/common/getTotalInvestment';
import presenter from './AllocationInfoPresenter';
import groupBySectors from './groupBySectors';
import createPieData from './createPieData';

const mapStateToProps = ({ portfolio }) => {
  const totalInvestment = getTotalInvestment(portfolio);
  const sectors = groupBySectors(portfolio);

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

  const legendData = createPieData.createLegendData(sectors);

  const pieData = createPieData.createPieData(sectors);

  const pieColor = createPieData.createPieColor(sectors);

  return { pieData, pieColor, legendData };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPortfolio: () => dispatch(thunk.fetchPortfolio())
  };
};

const getAllocationInfo = connect(mapStateToProps, mapDispatchToProps)(presenter);
export default getAllocationInfo;
