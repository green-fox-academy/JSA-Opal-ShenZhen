const getAllData = data => ({
  type: 'GET_ALL_DATA',
  payload: {
    data
  }
});

export default {
  getAllData
};
