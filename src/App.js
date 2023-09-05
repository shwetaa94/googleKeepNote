
import './App.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote.js';
import Note from './Note.js';
import { useState } from 'react';

function App() {

  
  const [additem,setitem]=useState([]);
  const addNote=(note)=>{
    if(note.title==="" && note.content===""){
      
    }else{

      setitem((prev)=>{
        return [...prev,note]
      });
      
    };
  }
    
      const onDelete=(id)=>{
        setitem((oldata)=>{
          return(    
            oldata.filter( (currdata,index)=>{
                return index!==id;
            })
          )
        })
      }

  return (
    <div className="App">
    <Header />
    <CreateNote passnote={addNote}/>
    
    {
      additem.map( (val,index)=>{
      return(      
      <Note
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteitem={onDelete}
      />)
    })}
    </div>
    
  );
}

export default App;
