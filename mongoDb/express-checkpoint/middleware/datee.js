const date=new Date()
const  datee= (req,rest,next)=>{
let d=date.getDay()
let h=date.getHours()
if(!(h >= 9 && h <= 17 && d >= 1 && d <= 5)){
    rest.send("Not available")
}
next()

}
module.exports=datee