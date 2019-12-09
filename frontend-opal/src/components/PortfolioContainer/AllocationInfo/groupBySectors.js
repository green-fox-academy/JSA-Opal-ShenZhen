function groupBySectors(portfolio) {
  return portfolio.reduce((sectorsList, instrument) => {
    const result = sectorsList;
    if (result[instrument.sector]) {
      result[instrument.sector].list.push(instrument);
    } else {
      result[instrument.sector] = { list: [instrument] };
    }
    return result;
  }, {});
}

export default groupBySectors;
