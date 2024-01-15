const express=require("express")
const router=express.Router()
const Contact=require("../models/Contact")
//testt 
router.get("/",(req,res)=>{
    res.send("helloooooooo")
})

//add contaact
router.post("/add",async(req,res)=>{
    console.log(req.body,"hellooooo")
    const {name,email,phone}=req.body
    
    const newcontact=new Contact({
        name,email,phone
    })
   
  const contact= await newcontact.save()

  res.send({msg:"contact added",contact})
    
})
//delete contact
router.delete("/delete/:_id",async(req,res)=>{
    const {_id}=req.params
    const contact= await Contact.findOneAndDelete({_id})
    res.send({msg:"user deleted",contact})
})

//edit contact

router.put("/edit/:_id",async(req,res)=>{
    const{_id}=req.params
    const contact=await Contact.findByIdAndUpdate({_id},{$set:req.body},{new:true})
    res.send({msg:"contact edited",contact})
})
//fetch data
router.get("/getall",async(req,res)=>{
    const contacts=await Contact.find()
    res.send({msg:"contact fetched",contacts})
})


module.exports=router