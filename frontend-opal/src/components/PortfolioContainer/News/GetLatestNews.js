const GetLatestNews = portfolio => {
  const newsList = [];
  portfolio.map(stock => {
    return stock.news.map(news => {
      return newsList.push(news);
    });
  });
  newsList.sort((a, b) => {
    return a.datetime - b.datetime;
  });
  return newsList.slice(0, 5);
};

export default GetLatestNews;
