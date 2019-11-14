const portfolioList = [
    {id: '1', userId: '1', symbol: 'MSFT', amount: 123}
]

exports.getPortfolio = function (server) {
    if (req.headers.authorization == 'Bearer token') {
        server.get('/portfolio', function (req, res) {
            var response = {
                "portfolio": portfolioList
            };
        
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(response));
        })
    }
}
