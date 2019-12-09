const show = (name) => ({
  type: 'CHANGE_NAME',
  payload: {
    name: name
  }
});

export default {
  show
};
