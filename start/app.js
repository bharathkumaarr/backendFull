const http = require('http')

const server = http.createServer((req,res)=> {
    if (req.url =='/about') {
        res.end('the about page')
    }
    if (req.url =='/profile') {
        res.end('the profile page')
    }
    if (req.url=='/') {
        res.end('main page')
    }
})

server.listen(3000)