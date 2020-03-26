import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import useMediaQuery from '@material-ui/core/useMediaQuery';


///Messenger takes in room={'foo'} as a prop
//this determines the room that post will be sent too
//Mesenger also takes in isMod{bool} as a prop
//this determines if the post will be conidered a mod post or not
//This MAY be exploitable because currently it is prop, and so can be altered 

function Messenger (props){
const [chat, setChat] = useState ({
    adenvtreon: [],
    content: '',
    readError: null,
    writeError: null,
});

// const [isMod, setMod] = useState(false)

const [name, setName] = useState({
  name: ''
})

const matches = useMediaQuery('(min-width:600px)');

const [text, setText] = useState({
    content: ''
}
)

function handleChange(event) {
   setText({
      content: event.target.value
    });
}

    async function handleSubmit(event) {
      if(text.content === ''){
        alert('You cannot send an empty mesage!')
      }
      else if(name.name === '' || name.name === null){
        event.preventDefault();
        let nName = prompt("Please enter in a chat name",`Anon${(Math.random() * 999)}`);
        setName({name: nName})
      }
      else if(name.name !== ''){
        event.preventDefault();
        setChat({ writeError: null });
        try {
          await db.ref(props.room).push({
            content: text.content,
            timestamp: Date(Date.now()),
            name: name.name,
            mod: props.isMod
          });
          setText({ content: '' });
        } catch (error) {
          setChat({ writeError: error.message });
        }
      }
      }



useEffect(() =>{
    db.ref(props.room).on("value", snapshot => {
        let adenvtreon = [];
        snapshot.forEach((snap) => {
            adenvtreon.push(snap.val());
})
 setChat({adenvtreon: adenvtreon})
    }) 
},[])


return (
    <div>
      <Paper style={matches ? {backgroundColor: 'grey', width: '50%', padding: '20px', height: '600px', overflow: 'auto'} :{backgroundColor: 'grey', width: '70%', padding: '20px', height: '300px', overflow: 'auto'} }>
      <div className={props.room}>
        {chat.adenvtreon.map(chat => {
          
        if(chat.name === name.name){
          return <Paper elevation={2} style={chat.mod ? {fontFamily: 'Baloo 2, cursive', width:'50%',padding:'5px', paddingBottom: '15px', marginBottom: '15px',backgroundColor: '#FDFD96'} : {fontFamily: 'Baloo 2, cursive', width:'50%',padding:'5px', paddingBottom: '15px', marginBottom: '15px',backgroundColor: '#add8e6'}} key={chat.timestamp}>{chat.content} 
          <br/>
          <p style={{fontSize: '5px'}}>{chat.name}~ @{chat.timestamp}</p>
          </Paper>
        }
        else{
          return <Paper elevation={2} style={chat.mod ?{fontFamily: 'Baloo 2, cursive', width:'50%',padding:'5px', paddingBottom: '15px', marginBottom: '15px', marginLeft: '30px',backgroundColor: '#FDFD96' } : {fontFamily: 'Baloo 2, cursive', width:'50%',padding:'5px', paddingBottom: '15px', marginBottom: '15px', marginLeft: '30px'}} key={chat.timestamp}>{chat.content} 
          <br/>
          <p style={{fontSize: '5px'}}>{chat.name}~ @{chat.timestamp}</p>
          </Paper>
        }
        })}
      </div>
      </Paper>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} style={matches ? {width: '44%', marginBottom: '20px', padding: '20px'} : {width: '53%', marginBottom: '20px', padding: '20px'}} value={text.content}></input>
        <button style={{padding: '20px'}} type="submit">Send</button>
      </form>
    </div>
  );



}

export default Messenger