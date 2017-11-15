var mongoose = require('mongoose');
var People = mongoose.model('People');

module.exports = {
    add : function(req,res){
        var add_people = new People({name : req.params.name});
        add_people.save(function(err){
            if(err){
                console.log('something went wrong!!!');
            }
            else{
                console.log('added a name..');
                res.redirect('/');
            }
        })
    },

    show : function(req,res){
        People.find({}, function(err, people){
            if(err){
                console.log('something went wrong!!!');
            }
            else{
                console.log('displayed people');
                res.json(people);
            }
        })
    },

    remove : function(req,res){
        People.remove({name : req.params.name},function(err){
            if(err){
                console.log('something went wrong!!!');
            }
            else{
                console.log('deleted a name..');
                res.redirect('/');
            }
        })
    },

    find : function(req,res){
        People.find({name : req.params.name}, function(err, people){
            if(err){
                console.log('something went wrong!!!');
            }
            else{
                console.log('displayed name');
                res.json(people);
            }
        })
    }
}