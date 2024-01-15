import { useState } from 'react';

import { addContact } from '../redux/actions';
import ReactModal from 'react-modal';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function AddContact({isOpen,handleModal}) {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[phone,setPhone]=useState("")
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleSubmit=()=>{
        const newContact={name,email,phone}
dispatch(addContact(newContact))
handleModal()
navigate("/allUser")
    }
  return (
    <div >

      <ReactModal
style={{width:"200px",height:"500px"}}
isOpen={isOpen}
>
    <label>Name</label>
    <input onChange={(e)=>setName(e.target.value)}/>
    <label>email</label>
    <input onChange={(e)=>setEmail(e.target.value)}/>
    <label>phone</label>
    <input onChange={(e)=>setPhone(e.target.value)}/>
    <button onClick={handleSubmit}>SUBMIT</button>
    <button onClick={handleModal}>CLOSE</button>
    
</ReactModal>
    </div>
  )
}

export default AddContact
