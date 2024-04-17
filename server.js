const path = require('path');

//express
const express = require('express');
const app = express();
const cors = require("cors");
const connect = require('./schemas');

//Board & User schema
// const Board = require('./schemas/board');
// const User = require('./schemas/user');
//Board & User routes
// const boardRoutes = require('./routes/boardRouter');
// const userRoutes = require('./routes/userRouter');

const auth = require('./middleware/auth')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// connect();

const jwt = require('jsonwebtoken');

//environment
const dotenv = require('dotenv');
dotenv.config();

const corsOptions = {
    origin: true,
    credentials: true
};
app.use(cors(corsOptions));

//parsing incoming requests
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//router setting
app.use("/user", require("./routes/userRouter"));
app.use("/board", require("./routes/boardRouter"));

//homepage
app.get('/', (req, res)=>{
    res.render('home');
});

//signup page
app.get('/signup', (req,res)=> {
    console.log('signup page');
    res.render('signup');
});

//login page
app.get('/login', (req,res)=>{
    console.log('login page');
    res.render('login');
})

app.get('/board', (req,res)=>{
    console.log('posting page');
    res.render('board');
})

//open server
app.listen(3000, ()=>{
    console.log('Server on port 3000');
});