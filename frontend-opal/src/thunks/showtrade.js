import actions from 'actions/showTrade';

function showTradeName(input) {
  return dispatch => {
    dispatch(actions.show(input));
  };
}

export default {
  showTradeName
};
