import PropTypes from 'prop-types';

const defaultDetailData = [];
const defaultChartData = [];
const detailDataTypes = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    value: PropTypes.string,
    group: PropTypes.number
  })
);
const chartDataTypes = PropTypes.arrayOf(
  PropTypes.shape({
    x: PropTypes.string,
    y: PropTypes.number
  })
);

export default {
  defaultDetailData,
  defaultChartData,
  detailDataTypes,
  chartDataTypes
};
