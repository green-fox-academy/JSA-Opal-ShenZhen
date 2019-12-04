import { connect } from 'react-redux';
import Result from 'components/SearchResult/Result';

const mapStateToProps = state => {
  return {
    results: state.searchResult.results,
    input: state.searchResult.input
  };
};

export default connect(mapStateToProps, null)(Result);
