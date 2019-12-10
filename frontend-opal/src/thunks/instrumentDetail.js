import _ from 'lodash';

import actions from 'actions/instrumentDetail';
import dataSample from 'components/InstrumentDetail/dataSample';
import stockAPI from './stock_API';

function loopBackOneDay(date) {
  const dateDate = date.getDate();
  const dateMonth = date.getMonth();
  const dateYear = date.getFullYear();
  if (dateDate === 2) {
    console.log(date, date.getDate());
    if (dateMonth !== 0) {
      console.log(dateMonth - 1);
      return new Date(dateYear, dateMonth, 1);
    }
    return new Date(dateYear - 1, 11, 1);
  }
  return new Date(dateYear, dateMonth, dateDate - 1);
}

function avoidWeekend(date) {
  let wantedDate = _.cloneDeep(date);
  if (date.getDay() === 1) {
    wantedDate = loopBackOneDay(wantedDate);
    wantedDate = loopBackOneDay(wantedDate);
  } else if (date.getDay() === 0) {
    wantedDate = loopBackOneDay(wantedDate);
  }
  return wantedDate;
}

// This function is for get work days.
function getResuqestDates() {
  const pointsNumber = 7;
  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();
  let lastChangeDay = new Date(todayYear, todayMonth, todayDate);
  lastChangeDay = loopBackOneDay(lastChangeDay);
  lastChangeDay = loopBackOneDay(lastChangeDay);
  const points = [];
  for (let i = 0; i < pointsNumber; i += 1) {
    const pushDate = avoidWeekend(lastChangeDay);
    points.unshift({ x: pushDate, y: 0 });
    lastChangeDay = loopBackOneDay(pushDate);
    // console.log(lastChangeDay.getDay());
  }
  return points;
}

function generatePointsForDetailChart(charts) {
  const step = Math.floor(charts.length / 7);
  const selectedCharts = [];
  for (let i = charts.length - 1; i >= 0; i -= step) {
    selectedCharts.unshift({ x: String(charts[i].label.split(',')[0]), y: charts[i].close });
  }
  return selectedCharts;
}

function getInstrumentDetailData(symbol) {
  return async dispatch => {
    const apiData = await stockAPI.fetchInstrumentDetailData(symbol);
    dataSample[0].value = String(apiData.quote.week52Low);
    dataSample[1].value = String(apiData.quote.week52High);
    dataSample[2].value = String(apiData.quote.peRatio);
    dispatch(
      actions.getInstrumentDetailData({
        detailData: dataSample,
        chartData: generatePointsForDetailChart(apiData.chart)
      })
    );
  };
}

export default {
  getInstrumentDetailData
};
