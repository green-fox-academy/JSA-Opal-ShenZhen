const portfolioList = [
    {id: '1', userId: '1', symbol: 'MSFT', amount: 123}
]

exports.getPortfolio = function (server) {
    server.get('/portfolio', function (req, res) {
        let authorization = req.headers.authorization;
        if (!authorization || !authorization.startsWith('Bearer')) {
            var response = {
                "error": 'Authentication header is missing!'
            };

            res.statusCode = 401;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(response));
        } else if (!authorization.includes('token')) {
            var response = {
                "error": 'User is not allowed to do this action!'
            };

            res.statusCode = 403;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(response));
        } else {
            var response = {
                "portfolio": portfolioList
            };
        
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(response));
        }
    })
}
