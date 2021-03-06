var people = require('../controllers/people.js');

module.exports = function(app){
    app.get('/', function(req,res){
        // res.send("<h1>Hello Express</h1>");
        people.show(req,res);
    })

    app.get('/new/:name', function(req,res){
        people.add(req,res);
    })

    app.get('/remove/:name', function(req,res){
        people.remove(req,res);
    })

    app.get('/:name', function(req,res){
        people.find(req,res);
    })
}