import { GET_Contacts } from "./actionTypes"
import axios from "axios"
export const getContacts=()=>(dispatch)=>{
axios.get("http://localhost:4001/api/getall")
.then((res)=>dispatch({type:GET_Contacts,payload:res.data}))
.catch((err)=>console.log(err))
}

export const deleteContact=(idContact)=>(dispatch)=>{
    axios.delete(`http://localhost:4001/api/delete/${idContact}`)
    .then((res)=>dispatch(getContacts()))
    .catch((err)=>console.log(err))
}

export const addContact=(newContact)=>(dispatch)=>{
    axios.post("http://localhost:4001/api/add",newContact)
    .then((res)=>dispatch(getContacts()))
    .catch((err)=>console.log(err))
}

export const editContact=(idContact,editedContact)=>(dispatch)=>{
    axios.put(`http://localhost:4001/api/edit/${idContact}`,editedContact)
    .then((res)=>dispatch(getContacts()))
    .catch((err)=>console.log(err))
}