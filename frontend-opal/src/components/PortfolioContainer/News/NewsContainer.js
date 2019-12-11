import { connect } from 'react-redux';
import presenter from './News';
import GetLatestNews from './GetLatestNews';

const mapStateToProps = ({ portfolio }) => {
  const getLatestNews = GetLatestNews(portfolio);

  return { getLatestNews };
};

const getNews = connect(mapStateToProps, null)(presenter);
export default getNews;
