import palette from 'google-palette';

function createLegendData(sectors) {
  return Object.keys(sectors).map(sector => ({
    name: sector,
    symbol: { type: 'square' }
  }));
}

function createPieData(sectors) {
  return Object.keys(sectors).map(sector => ({
    x: sector,
    y: sectors[sector].value,
    label: `${sectors[sector].value}%`
  }));
}

function createPieColor(sectors) {
  let pieColor = palette('tol-sq', Object.keys(sectors).length + 2);
  pieColor = pieColor.slice(2).map(color => `#${color}`);
  return pieColor;
}

export default { createLegendData, createPieData, createPieColor };
