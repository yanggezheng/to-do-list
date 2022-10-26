// 1ST DRAFT DATA MODEL
const mongoose = require('mongoose');

// users
// * our site requires authentication...
// * so users have a username and password
// * in order to make the account secure, the passward will be hashed
const User = new mongoose.Schema({
  // username provided by authentication plugin
  // password hash provided by authentication plugin
  lists:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'List' }]
});

//   General information in a to do list
// * includes some basic information about the task (the due date, penalty, etc)
// * a list can have 0 to 5 tasksff
const List = new mongoose.Schema({
  name: {type: String, required: true},
  dueDate: {type: Number, min: 1000, required: true},
  teamWork: {type: Boolean, default: false, required: true},
  important: {type: Boolean, default: true, required: true},
  penalty: {type: String, required: false},
  teamMates: {type: Boolean, default: false, required: false},
  detail: [detail]
}, {
  _id: true
});

// a task can be break down into small pieces
// * each list must have a related general task
const detail = new mongoose.Schema({
    name: "AIT HW5",
    detailedTasks: [
      { name: "part1", status: "did not start",  teamWork: false, teamMates : {}},
      { name: "part2", status: "did not start",  teamWork: false, teamMates : {}},
      { name: "part3", status: "did not start",  teamWork: false, teamMates : {}}
    ],
    createdAt: 1025// current time

// TODO: add remainder of setup for slugs, connection, registering models, etc. below

});