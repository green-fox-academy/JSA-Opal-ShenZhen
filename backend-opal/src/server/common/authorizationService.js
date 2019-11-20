function checkAuthHeader(header) {
  if (!header || !header.startsWith('Bearer')) {
    return true;
  }
  return false;
}

function authorize(header) {
  if (!header.includes('token')) {
    return true;
  }
  return false;
}

module.exports = { checkAuthHeader, authorize };
