function checkAuthHeader(header) {
    if (!header || !header.startsWith('Bearer')) {
        return true;
    }
}

function authorize(header) {
    if (!header.includes('token')) {
        return true;
    }
}

module.exports = { checkAuthHeader, authorize };