import React, { useState } from "react";
import './App.css';
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

const CreateNote = (props) => {

    const[note,setNote] = useState({title:"" ,content:""});
    
    const InputEvent=(event)=>{
        // const value=event.target.value;
        // const name=event.target.name;
        const{name,value}=event.target;
         setNote( (prevdata)=>{
                  return(   
                      { ...prevdata,
                        [name]:value, 
                      }
                    ) 
          });
    };

    const addEvent=(e)=>{
      e.preventDefault();
    
        props.passnote(note);
        setNote( ()=>{
         return ({
            title:"",
            content:""
          })
        })
    };

  return (
    <div className="main_note">
      <form>
        <div className="data">
           <input type="text"  onChange={InputEvent} value={note.title} name="title" placeholder="Title" autoComplete="off" />
           <textarea
             rows=""
             columns="" 
             name='content'
             onChange={InputEvent}
             value={note.content} 
             placeholder="Write a note..."
           ></textarea>
           </div>
        <Button className="btn" onClick={addEvent}>
          <AddIcon className="plus_sign" />
        </Button>
      </form>
    </div>
  );
};

export default CreateNote;
