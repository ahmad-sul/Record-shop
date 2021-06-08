const db = require('../modals/database')

exports.getUsers=(req,res)=>{
  
    let users = db.get('users').value()   
   res.send({success:true,data:users})
  }

  exports.getSingleUser=(req,res)=>{
    const id = req.params.id
    let user = db.get('users').find({id:Number(id)}).value()

    if (user) {
          res.json({success:true,data:user})
    }else{
        res.send({success:false, message:'no such user found in our collection'})
    }
     
   }

   exports.postUser=(req,res)=>{
    //    console.log(req.body)
      db.get('users').push(req.body).last().assign({createAt:new Date().toLocaleTimeString()}).write()
       res.json({success:true, data:req.body})
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