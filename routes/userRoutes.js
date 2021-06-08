const express = require('express')

const Route = express.Router()
const { getUsers, getSingleUser, postUser, patchUser, putUser, deleteUser }= require('../controllers/usersConrollers')

// const users = require('../modals/data')

// import db from database


 //CRUD OPERATION
    // create
    //update
    //read
    // delete

    // creating routes
// get request for all users
    Route.get('/',getUsers)

   // route to get a single user
   Route.get('/:id',getSingleUser)

   // get post request (create a new user)
   Route.post('/',postUser)

   // get patch request (update)
   Route.patch('/:id',patchUser)

   // get put request (update/replace)
   Route.put('/:id',putUser)

   // gez delete request
   Route.delete('/:id',deleteUser)

   // we can write it like this

//    Route.route('/')
//    .get(getUsers)
//    .post(postUser)


//    Route.route('/:id')
//    .get(getSingleUser)
//    .patch(patchUser)
//    .delete(deleteUser)
//    .put(putUser)

////////////////////////////////////////////
//////////// Important /////////////////////
////////////////////////////////////////////

module.exports=Route