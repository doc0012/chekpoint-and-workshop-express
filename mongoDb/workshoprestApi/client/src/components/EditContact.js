import {useState} from 'react'
import ReactModal from 'react-modal';
import {useDispatch} from "react-redux"
import {editContact} from "../redux/actions"
import {useNavigate} from "react-router-dom"
function EditContact({el}) {
    let[isOpen,setIsOpen]=useState(false)
    const[name,setName]=useState(el.name)
    const[email,setEmail]=useState(el.email)
    const[phone,setPhone]=useState(el.phone)
    
const handleModal=()=>{
 
    setIsOpen(!isOpen)
}
const dispatch=useDispatch()
const navigate=useNavigate()
const editHanlder=()=>{
    const Contact={name,email,phone}
    console.log(Contact,"testttt")
dispatch(editContact(el._id,Contact))
handleModal()
navigate("/allUser")
}
  return (
    <div>
        <button onClick={handleModal}>edit</button>
       <ReactModal
style={{width:"200px",height:"500px"}}
isOpen={isOpen}
>
    <label>Name</label>
    <input onChange={(e)=>setName(e.target.value)} value={name}/>
    <label>email</label>
    <input onChange={(e)=>setEmail(e.target.value)} value={email}/>
    <label>phone</label>
    <input onChange={(e)=>setPhone(e.target.value)} value={phone}/>
    <button onClick={editHanlder} >SUBMIT</button>
    <button onClick={handleModal}>CLOSE</button>
    
</ReactModal>
    </div>
  )
}

export default EditContact
