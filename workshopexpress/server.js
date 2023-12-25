const express=require("express")
//instance express
const app=express()
const Datee=require("./middleweare/Datee")


const port=5001

app.use(express.json())
app.use(Datee)

app.use(express.static(__dirname+"/Public"))
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/Public/home.html")
})

app.get("/about",(req,res)=>{
    res.sendFile(__dirname+"/Public/about.html")
})


//app.use("/api/users",require("./routes/userRoute"))


app.listen(port,(err)=>{
    err?console.log(err):console.log(`server is running on port ${port}`)
})