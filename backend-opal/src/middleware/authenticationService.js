module.exports = (req, res, next) => {
  try {
    const bearer = req.headers.authorization.split(' ')[0];
    const token = req.headers.authorization.split(' ')[1];
    if (bearer !== 'Bearer') {
      const response = {
        error: 'Authentication header is missing!'
      };

      res.status(401).send(response);
    } else if (token !== 'token') {
      const response = {
        error: 'User is not allowed to do this action!'
      };

      res.status(403).send(response);
    } else {
      next();
    }
  } catch (error) {
    res.status(401).send(error);
  }
};
