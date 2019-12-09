import actions from 'actions/instrumentDetail';
import dataSample from 'components/InstrumentDetail/dataSample';
import stockAPI from './stock_API';

function getInstrumentDetailData(symbol) {
  return async dispatch => {
    const apiData = await stockAPI.fetchInstrumentDetailData(symbol);
    dataSample[0].value = String(apiData.week52Low);
    dataSample[1].value = String(apiData.week52High);
    dataSample[2].value = String(apiData.peRatio);
    dispatch(actions.getInstrumentDetailData(dataSample));
  };
}

export default {
  getInstrumentDetailData
};
