const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const creatError = require('http-errors')
const port = 3000;
const userRoutes = require('./routes/userRoutes')

/// create express server

const app = express()

// cors middlware

// app.use(cors({origin:'*'}))
// or we can use this:
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Origin',['GET','POST','PATCH', 'DELETE','OPTIONS'])
    next()
})
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

// 404 page not found middlware
app.use((req,res,next)=>{
     // let err=new Error('page not found')
    // err.status=404

     // or we can write it like this:
  // let err=new creatError.NotFound()

  // or we can write it like this:
    let err= creatError(404,'Page not found')
   next(err)
})   

// error handling midalware / universal error handler
app.use((err,req,res,next)=>{
    res.status(err.status||500).send({success:false,message: err.message})
})


app.listen(port,()=>{
    console.log( 'express server is runing on port : ', port)
})