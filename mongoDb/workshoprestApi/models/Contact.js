const mongoose=require("mongoose")

const Schema = mongoose.Schema
const ContactSchema=new Schema({
name:{
    type:String
},
email:{
    type:String,
    
},
phone:{
    type:Number
},
dateCreation:{
    type:Date,
    default:Date.now()
}

})

module.exports=Contact=mongoose.model("contacts",ContactSchema)