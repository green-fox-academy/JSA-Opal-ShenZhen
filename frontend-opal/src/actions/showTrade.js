const show = name => ({
  type: 'CHANGE_NAME',
  payload: {
    name
  }
});

export default {
  show
};
