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

const express = require('express');

const morgan = require('morgan')
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




app.get('/',(req,res,next)=>{
    const a = 5;
    const b=10;
    
    console.log(a+b);
    next()
},(req,res)=>{
    // res.send('hello world'
    res.render('index')
})

app.get('/about', (req,res)=> {
    res.send('this is the about page')
})

app.get('/profile', (req,res)=> {
    res.send('this is the profile page')
})

app.listen(3000)

