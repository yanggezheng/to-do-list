// is the environment variable, NODE_ENV, set to PRODUCTION? 
// 1ST DRAFT DATA MODEL
// users
// * our site requires authentication...
// * so users have a username and password
// * in order to make the account secure, the passward will be hashed

  // username provided by authentication plugin
  // password hash provided by authentication plugin
import mongooseSlugPlugin from 'mongoose-slug-plugin';
import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, unique: true, required: true}
  });

  const ArticleSchema = new mongoose.Schema({
    title: {type: String, required: true},
    url: {type: String, required: true},
    description: {type: String, required: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  });

// configure plugin
ArticleSchema.plugin(mongooseSlugPlugin, {tmpl: '<%=title%>'});
// register models
mongoose.model('User', UserSchema);
mongoose.model('Article', ArticleSchema);
// mongoose.connect('mongodb://localhost/hw05');
import fs from 'fs';
import path from 'path';
import url from 'url';
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
let dbconf;
if (process.env.NODE_ENV === 'PRODUCTION') {
 // if we're in PRODUCTION mode, then read the configration from a file
 // use blocking file io to do this...
 const fn = path.join(__dirname, 'config.json');
 const data = fs.readFileSync(fn);

 // our configuration file will be in json, so parse it and set the
 // conenction string appropriately!
 const conf = JSON.parse(data);
 dbconf = conf.dbconf;
} else {
 // if we're not in PRODUCTION mode, then use
 dbconf = 'mongodb://localhost/hw05';
}
console.log("____________________________________");
console.log("--->", dbconf, "<---");
console.log("____________________________________");


mongoose.connect(dbconf);

//   General information in a to do list
// * includes some basic information about the task (the due date, penalty, etc)
// * a list can have 0 to 5 tasksff
// const List = new mongoose.Schema({
//   name: {type: String, required: true},
//   dueDate: {type: Number, min: 1000, required: true},
//   teamWork: {type: Boolean, default: false, required: true},
//   important: {type: Boolean, default: true, required: true},
//   penalty: {type: String, required: false},
//   teamMates: {type: Boolean, default: false, required: false},
//   detail: [detail]
// }, {
//   _id: true
// });

// a task can be break down into small pieces
// * each list must have a related general task
// const detail = new mongoose.Schema({
//     name: "AIT HW5",
//     detailedTasks: [
//       { name: "part1", status: "did not start",  teamWork: false, teamMates : {}},
//       { name: "part2", status: "did not start",  teamWork: false, teamMates : {}},
//       { name: "part3", status: "did not start",  teamWork: false, teamMates : {}}
//     ],
//     createdAt: 1025// current time

// TODO: add remainder of setup for slugs, connection, registering models, etc. below

// });