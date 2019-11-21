const search = (results) => ({
    type: 'SEARCH',
    payload: {
        results
    }
});

export default {
    search
}
