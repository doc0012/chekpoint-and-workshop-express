import React from 'react'
import { useDispatch } from 'react-redux'
import {deleteContact} from "../redux/actions"
import EditContact from './EditContact'
function ContactCard({el}) {
  const dispatch=useDispatch()
  const deletehandler=()=>{
dispatch(deleteContact(el._id))
  }
  return (
    <div>
   <h2>{el.name}</h2>
   <h3>{el.email}</h3>
   <h3>{el.phone}</h3>
   <button onClick={deletehandler}>DELETE</button>
<EditContact el={el}/>
    </div>
  )
}

export default ContactCard
