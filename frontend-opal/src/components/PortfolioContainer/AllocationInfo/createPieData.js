import palette from 'google-palette';

function createLegendData(sectors) {
  return Object.keys(sectors).map(sector => ({
    name: sector,
    symbol: { type: 'square' }
  }));
}

function createPieData(sectors, totalInvestment) {
  return Object.keys(sectors).map(sector => {
    const value =
      (
        sectors[sector].list.reduce((accumulativeValue, instrument) => {
          let result = accumulativeValue;
          result += instrument.amount * instrument.marketValue;
          return result;
        }, 0) / totalInvestment
      ).toFixed(2) * 100;

    return {
      x: sector,
      y: value,
      label: `${value}%`
    };
  });
}

function createPieColor(sectors) {
  let pieColor = palette('tol-sq', Object.keys(sectors).length + 2);
  pieColor = pieColor.slice(2).map(color => `#${color}`);
  return pieColor;
}

export default { createLegendData, createPieData, createPieColor };
