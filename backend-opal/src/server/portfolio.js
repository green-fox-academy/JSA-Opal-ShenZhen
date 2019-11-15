const router = require('express').Router();
const authService = require('./common/authorizationService');

const portfolioList = [
    {id: '1', userId: '1', symbol: 'MSFT', amount: 123}
]

router.get('/', function (req, res) {
    let authorization = req.headers.authorization;
    if (authService.checkAuthHeader(authorization)) {
        let response = {
            "error": 'Authentication header is missing!'
        };

        res.status(401).send(response);
    } else if (authService.authorize(authorization)) {
        let response = {
            "error": 'User is not allowed to do this action!'
        };

        res.status(403).send(response);
    } else {
        let response = {
            "portfolio": portfolioList
        };
    
        res.status(200).send(response);
    }
})

module.exports = router;