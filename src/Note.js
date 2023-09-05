import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from "@mui/material/Button";
import './App.css';
const Note = (props) => {
 
    const deletenote=()=>{
       return props.deleteitem(props.id)
    }
  return (
   <>
       <div className="note">
           <h1>{props.title}</h1>
           <p>{props.content} </p>
           <Button className='btn' onClick={deletenote}>
               <DeleteIcon className="delete_icon" />
           </Button>
       </div>
   </>
  )
}

export default Note