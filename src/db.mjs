import mongoose from 'mongoose';
import mongooseSlugPlugin from 'mongoose-slug-plugin';

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, unique: true, required: true}
  });
  const FriendSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  });

  const TaskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    dueDate: {type: String, required: true},
    description: {type: String, required: true},
    done: {type: Boolean, required : true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  });

// configure plugin
TaskSchema.plugin(mongooseSlugPlugin, {tmpl: '<%=title%>'});

// register models
mongoose.model('User', UserSchema);
mongoose.model('Task', TaskSchema);
mongoose.model('Friend', FriendSchema);
let dbconf;
  if (process.env.NODE_ENV === 'PRODUCTION') {
   // if we're in PRODUCTION mode, then read the configration from a file
   // use blocking file io to do this...
   const fn = path.join(__dirname, 'config.json');
   console.log(fn);
   const data = fs.readFileSync(fn);
  
   // our configuration file will be in json, so parse it and set the
   // conenction string appropriately!
   const conf = JSON.parse(data);
   dbconf = conf.dbconf;
  } else {
   // if we're not in PRODUCTION mode, then use
   dbconf = 'mongodb://localhost/hw05';
  }
  
  mongoose.connect(dbconf);
  
  