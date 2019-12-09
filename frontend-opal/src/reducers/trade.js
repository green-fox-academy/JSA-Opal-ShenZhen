const pairs = {
  CHANGE_NAME: (state, action) => ({
    ...state,
    name: action.payload.name,
  })
};

export default pairs;