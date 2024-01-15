const express=require("express")
const cors=require("cors")
const app=express()
const connectDB=require("./Config/connectDB")
const port=4001
app.use(cors({origin:'http://localhost:3000'}))
app.use(express.json())

connectDB()

app.use("/api",require("./routes/routeContact"))

app.listen(port,(err)=>{
    err?console.log(err) : console.log(`server is running on port ${port}`)
})