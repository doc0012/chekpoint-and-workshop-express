
import {GET_Contacts} from "./actionTypes"
const initState={
    contacts:[]
}

export const reducer=(state=initState,action)=>{
    switch (action.type) {
        case GET_Contacts:
            return {...state,
                contacts:action.payload
            }
      
    
        default:
            return state
         
    }
}