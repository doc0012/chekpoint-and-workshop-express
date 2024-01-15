import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import {Routes,Route,Link} from "react-router-dom"
import AddContact from './components/AddContact';
function App() {
let[isOpen,setIsOpen]=useState(false)
const handleModal=()=>{
  setIsOpen(!isOpen)
}
  return (
    
    <div className="App">

      <button><Link to="/allUser">list contacts</Link></button>
      <button onClick={handleModal}><Link to="/add">AddContact</Link></button>
      <Routes>
        <Route  path="/allUser" element={   <ContactList />} />
        <Route  path="/add" element={   <AddContact isOpen={isOpen} handleModal={handleModal}/>} />

      </Routes>
  


    </div>
  );
}

export default App;
