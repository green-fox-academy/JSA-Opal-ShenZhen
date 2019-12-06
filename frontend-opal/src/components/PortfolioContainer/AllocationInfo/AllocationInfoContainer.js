import { connect } from 'react-redux';
import getTotalInvestment from 'components/common/getTotalInvestment';
import presenter from './AllocationInfoPresenter';
import groupBySectors from './groupBySectors';
import createPieData from './createPieData';

const mapStateToProps = ({ portfolio }) => {
  const totalInvestment = getTotalInvestment(portfolio);
  const sectors = groupBySectors(portfolio);

  const legendData = createPieData.createLegendData(sectors);

  const pieData = createPieData.createPieData(sectors, totalInvestment);

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
