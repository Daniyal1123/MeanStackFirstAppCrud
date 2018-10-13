var mongoose = require('mongoose');
const Schema = mongoose.Schema;

//  let issue = new Schema({
//     title: {
//         type: String
//     },
//     responsible: {
//         type: String
//     },
//     description: {
//         type: String
//     },
//     severity: {
//         type: String
//     }
// });
let emp = new Schema({
    name: {
        type: String
    },
    age :{
      type :String
    },
    dept :{
      type :String
    }
    });
// const Issue= mongoose.model('Issue', emp);
const Emp= mongoose.model('Emp', emp);
module.exports = (Emp);
