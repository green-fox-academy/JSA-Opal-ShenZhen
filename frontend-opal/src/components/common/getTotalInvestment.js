function getTotalInvestment(fetchPortfolio) {
  const totalInvestment = fetchPortfolio
    .map(instrument => instrument.amount * instrument.marketValue)
    .reduce((a, b) => a + b);
  return totalInvestment;
}

export default getTotalInvestment;
