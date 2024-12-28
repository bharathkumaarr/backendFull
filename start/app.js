// const http = require('http')

// const server = http.createServer((req,res)=> {
//     if (req.url =='/about') {
//         res.end('the about page')
//     }
//     if (req.url =='/profile') {
//         res.end('the profile page')
//     }
//     if (req.url=='/') {
//         res.end('main page')
//     }
// })

// server.listen(3000)

const userModel = require('./models/user');
const dbConnection = require('./config/db');


const express = require('express');


const morgan = require('morgan');
const app = express();

app.use(morgan('dev'))

app.set('view engine','ejs');


// app.use((req,res,next)=>{
//     console.log('this is middleware');
//     const a=2;
//     const b=3;
//     console.log(a+b);

//     // if (req.url == '/about') {
//     //     console.log('this is going through about middleware');
//     // }
//     // else if (req.url == '/profile') {
//     //     console.log('going through profile middleware');
//     // } 
//     // else if (req.url == '/') {
//     //     console.log('this is main page middleware')
//     // } else {
//     //     console.log('error no action')
//     // }



//     return next()


// })


app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.get('/',(req,res)=>{
    // res.send('hello world'
    res.render('index')
})

app.get('/about', (req,res)=> {
    res.send('this is the about page')
})

app.get('/profile', (req,res)=> {
    res.send('this is the profile page')
})

app.get('/register', (req,res)=> {
    res.render('register')
})
app.post('/register', async (req,res)=> {

    const {username, email, password} = req.body //object destrcucturing
    
    await userModel.create({
        username: username,
        email: email,
        password: password
    })

    res.send('user registered')
})


app.post('/get-form-data',(req,res)=> {
    console.log(req.body);
    res.send('data received');
})
app.listen(3000)

