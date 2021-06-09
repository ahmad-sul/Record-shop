
const db = require('../modals/database')
const creatError = require('http-errors')

exports.getUsers=(req,res)=>{
  
    let users = db.get('users').value()   
   res.send({success:true,data:users})
  }

  exports.getSingleUser=(req,res,next)=>{
    const id = req.params.id
    let user = db.get('users').find({id:Number(id)}).value()

    if (user) {
          res.json({success:true,data:user})
    }else{
        next(new createError.BadRequest('no such user found in our collection'))
    }
     
   }

   exports.postUser=(req,res,next)=>{
    //    console.log(req.body)
    const {first_name, last_name, email}=req.body
    if (first_name!==''&& last_name!==''&& email!== '') {
         db.get('users').push(req.body).last().assign({createAt:new Date().toLocaleTimeString()}).write()
     return  res.json({success:true, data:req.body})
    }else{
       next(new creatError.BadRequest('please provide with all values'))
    }  
   }

   exports.patchUser=(req,res)=>{
    //    console.log(req.params)
    //    console.log(req.body)
    const id = req.params.id
       // targeting that specfic user
        db.get('users').find({id:Number(id)}).assign({first_name:req.body.first_name}).write()

        /// finding updated record in db
        const user = db.get('users').find({id:Number(id)}).value()
   
      
       res.json({success:true, data:user})
   
   }

   exports.putUser=(req,res)=>{
    const user = users.find(item=>item.id===Number(req.params.id))

  user=req.body
    res.json({success:true, data:user})

}
exports.deleteUser=(req,res)=>{
    const id = req.params.id

// deleting specific user
      db.get('users').remove({id:Number(id)}).write()
       res.json({success:true, data:'User Deleted'})
   }