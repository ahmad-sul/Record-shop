const express = require('express')
const logger = require('morgan')

const port = 3000;
const userRoutes = require('./routes/userRoutes')

/// create express server

const app = express()

//express middleware
// parsing req.body
app.use(express.json())
app.use(logger('dev'))

function printTime(req,res,next){
    console.log('time', new Date())
    console.log('method', req.method);
    console.log('url', req.url);
    next()
}

app.use(printTime)

app.use('/users',userRoutes)

   




app.listen(port,()=>{
    console.log( 'express server is runing on port : ', port)
})