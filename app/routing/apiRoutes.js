// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/employees. This will be used to display a JSON of all possible employees.
// A POST routes /api/employees. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
let employees = require('../data/employees');

module.exports = function (app) {

    app.get('/api/employees', function (req, res) {
        res.json(employees);
    });

    app.post('/api/employees', function (req, res) {
        //survey logic 
        let newEmployee = req.body;
        console.log(newEmployee);
     
        let lowestDifference = null;
        let bestMatch = null;
        for(let i = 0; i < employees.length; i++ ){
            let currentEmployee = employees[i];
            let totalDifference = 0;
           
            for(let i = 0; i < currentEmployee.scores.length; i++) {
               let scoreDifference = currentEmployee.scores[i] - newEmployee.scores[i];
               totalDifference += Math.abs(scoreDifference);
               
            }
            console.log(totalDifference, "total difference");

            if( lowestDifference === null || totalDifference < lowestDifference) {
                lowestDifference = totalDifference;
                bestMatch = currentEmployee;
                console.log(bestMatch, " this is the best match");
            }

               
        } 
        console.log(bestMatch);
        // employees.push(newEmployee);
        res.json(bestMatch);
    });

}
