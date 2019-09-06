var express = require('express'),
app = express(),
port = process.env.PORT || 3001;

mongoose = require('mongoose'),
User = require('./api/models/userModel'),
bodyParser = require('body-parser');

//mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://reactinsta:react2019@cluster0-xpbpo.mongodb.net/test?retryWrites=true&w=majority")
.then(()=>{
    console.log("success");
})
.catch((e)=>{
    console.log(e);
});

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/userListRoutes'); // importing Routes
routes(app);

app.listen(port);

console.log('todo list Restful API server started on: ' + port);