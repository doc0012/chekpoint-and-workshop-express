const express=require("express")
const router=express.Router()
let users=require("../Data")

//get users
router.get("/",(req,res)=>{
res.send(users)
})

router.post("/adduser",(req,res)=>{
    let newUser={...req.body,id:Math.random()}
    users.push(newUser)

    res.send(users)

})

router.delete("/:idd",(req,res)=>{
const idd=req.params.idd
console.log(idd,"hellllo")

 users=  users.filter((el)=>el.id !== idd)
 console.log(users,"testtt")
res.send({msg:"user deleted",users})

})

//edit user 

router.put("/editUser/:idd",(req,res)=>{
    const idd=req.params.idd
    const userToEdit=users.find((el)=>el.id == idd)
    const editedUser={...userToEdit,...req.body}
   users= users.map((el)=>el.id == idd ? editedUser:el)
    res.send({msg:"user edited",users})

})






module.exports=router