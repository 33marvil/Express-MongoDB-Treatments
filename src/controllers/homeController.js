const homeController = () => (req, res, next) =>
    res.send('Dependency Injection example - api/v1');

module.exports = homeController;
    