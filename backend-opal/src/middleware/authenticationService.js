module.exports = (req, res, next) => {
  if (req.headers.authorization) {
    if (!req.headers.authorization.startsWith('Bearer')) {
      const response = {
        error: 'Authentication header is missing!'
      };

      res.status(401).send(response);
    } else if (!req.headers.authorization.includes('token')) {
      const response = {
        error: 'User is not allowed to do this action!'
      };

      res.status(403).send(response);
    } else {
      next();
    }
  } else {
    const response = {
      error: 'Authentication header is missing!'
    };

    res.status(401).send(response);
  }
};
