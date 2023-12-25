
const date=new Date()

const Datee=(req,res,next)=>{

    let d=date.getDay()
    let h=date.getHours()
   
    if(!(h>=9 && h<=17 && d>=1 && d<=5)){
 return res.send(" not available")
    }
 

    next()
}

module.exports=Datee