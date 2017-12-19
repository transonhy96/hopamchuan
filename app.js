const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const router = require('./routes/api')
const dbconfig = require('./config/database');
const mongoose = require('mongoose');
//Connect to mongodb
mongoose.connect(dbconfig.database);
//Connected 
mongoose.connection.on('connected',()=>{
    console.log('Connected to database:' + dbconfig.database);
});
//Err
mongoose.connection.on('erro',(err)=>{
    console.log(err);
});
mongoose.Promise = global.Promise;
//Set port to the app
app.set('port',process.env.PORT || 3000);

//using cors middleware to allow multiple domain request to api
app.use(cors());

// parse the request body into json format , :))
app.use(bodyParser.json());

// Cai nay chua biet lam
app.use(bodyParser.urlencoded({extended : false}));

//Concat the request url to whatever inside the public folder
app.use(express.static(__dirname + 'public'));

//any request must be go through this router before the root '/'
app.use('/api',router);
// Middleware handle the error through the router
app.use((error,req,res,next)=>{
    res.status(400).send({err:error.message});
    console.log('This middleware is called');
});
app.get('/',(req,res)=>{
    res.send("<h1>Welcom to hopamchuan api</h1> </br><h3>Go to transonhy96@gmail.com for more infomation</h3>");
});

app.listen(app.get('port'),err=>{
    err ? console.log(err) : console.log("Server listening at port"+ app.get('port'));
});