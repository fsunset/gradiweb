let express = require('express'),
app = express(),
port = process.env.PORT || 8080,

bodyParser = require('body-parser'),
mongoose = require('mongoose'),

apiRoutes = require("./api-routes");


// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable to DB 'gradiweb'
mongoose.connect('mongodb://localhost/gradiweb', { useNewUrlParser: true});
var db = mongoose.connection;

!db ?
console.log("Error connecting Database")
:
console.log("Database connected successfully");


// Set some text for index
app.get('/', (req, res) => res.send('Hello World, using ExpressJS!'));

// Set route
app.use('/api', apiRoutes);


app.listen(port, function() {
	console.log("Running on port: " + port);
});
