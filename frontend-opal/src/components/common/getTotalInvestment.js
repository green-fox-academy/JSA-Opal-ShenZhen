function getTotalInvestment(fetchPortfolio) {
  const totalInvestment = fetchPortfolio
    .map(instrument => instrument.amount * instrument.marketValue)
    .reduce((a, b) => a + b, 0);
  return totalInvestment;
}

export default getTotalInvestment;
