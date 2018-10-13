var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var Emp = require('./models/emp.js')

var app = express();
var router = express.Router();
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/ItRetina');
var connection = mongoose.connection;
connection.once('open',() =>{
console.log('Connected finally');
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/issues', function (req, res) {
  Emp.find({}, function (err, docs) {
    if (err)
            console.log(err);
        else{
          console.log(docs);
            res.json(docs);
          }
 });
});
// var emp = new Emp({ name: 'Daniyal' , age : '22', dept : 'BSE'});
//  emp.save(function (err, docs) {
//     if (err) return console.error(err);
//    console.log("Saved",docs);
//    res.send(docs);
//  });


// router.route('/issues').get((req, res) => {
//   console.log('api hit')

// });


router.route('/issues/:id').get((req, res) => {
    Emp.findById(req.params.id, (err, emp) => {
        if (err)
            console.log(err);
        else
            res.json(emp);
    });
});

router.route('/issues/add').post((req, res) => {
    let emp = new Emp(req.body);
    emp.save()
        .then(emp => {
            res.status(200).json({'issue': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/issues/update/:id').post((req, res) => {
  // console.log("request",req.body);
  let emp = new Emp(req.body);
    Emp.findById(req.params.id, (err, emp) => {
        if (!emp)
            return(new Error('Could not load document'));
        else {
            emp.name = req.body.name;
            emp.age = req.body.age;
            emp.dept = req.body.dept;

            emp.save(function (err, docs) {
                if (err) return console.error(err);
                console.log("Saved",docs);
                res.send(docs);
            });
        }
    });
});

router.route('/issues/delete/:id').get((req, res) => {
    Emp.findByIdAndRemove({_id: req.params.id}, (err, emp) => {
        if (err)
            res.json(err);
        else
            res.json('Remove successfully');
    })
})



app.use('/', router);
  // Our first route
  // app.get('/', function (req, res) {
  //     res.send('Hello Dev!');
  // });

  // Listen to port 5000
  app.listen(5000, function () {
      console.log('Dev app listening on port 5000!');
  });

  // app.get('/dev', function (req, res) {
  //     res.send('Hello, you are now on the Dev route!');
  // });
