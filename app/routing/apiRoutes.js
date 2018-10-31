// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/employees. This will be used to display a JSON of all possible employees.
// A POST routes /api/employees. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
let employees = require('../data/employees');

module.exports = function (app) {

    app.get('/api/employees', function (req, res) {
        res.json(employees);
    });

    app.post('/api/employees', function (req, res) {
        // survey logic

    });

};
