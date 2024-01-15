import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getContacts} from "../redux/actions"
import ContactCard from './ContactCard'
function ContactList() {
    const dispatch=useDispatch()
    useEffect(()=>dispatch(getContacts()),[])

    const allcontacts=useSelector((state)=>state.contacts.contacts)
    console.log(allcontacts)
  return (
    <div style={{display:"flex" ,justifyContent:"space-between"}}>
      {allcontacts && allcontacts.map((el)=>(
        <ContactCard el={el}/>
      ))}
    </div>
  )
}

export default ContactList
