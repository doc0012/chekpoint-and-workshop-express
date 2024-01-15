const mongoose=require("mongoose")
const config=require("config")
const connectDB=()=>{
mongoose.connect(config.get("MONGO-URI"))
.then(()=>console.log("mongodb connected"))
.catch((err)=>console.log(err))
}
module.exports=connectDB