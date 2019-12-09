import { connect } from 'react-redux';
import thunks from '../../thunks/searchResult';

import SearchHeader from '../../components/SearchResult/Header';

const mapDispathcToProps = dispath => {
  return {
    search: input => dispath(thunks.search(input))
  };
};

export default connect(null, mapDispathcToProps)(SearchHeader);
