import actions from 'actions/searchResult';

const data = [
  {
    name: 'MS',
    fullName: 'Morgan Stanley',
    market: 'NYSE'
  },
  {
    name: 'MSFT',
    fullName: 'Microsoft Corp.',
    market: 'NASDAQ'
  },
  {
    name: 'FBMS',
    fullName: 'First Branchshares Inc/MS',
    market: 'NASDAQ'
  }
];

function search(input) {
  return dispatch => {
    dispatch(
      actions.search({
        input,
        results: data.filter(
          info => input !== '' && (info.name.includes(input) || info.fullName.includes(input))
        )
      })
    );
  };
}

export default {
  search
};
