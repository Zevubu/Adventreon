import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import useMediaQuery from '@material-ui/core/useMediaQuery';


function Messenger (){
const [chat, setChat] = useState ({
    adenvtreon: [],
    content: '',
    readError: null,
    writeError: null,
});

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
      console.log(name.name)
      if(name.name === ''){
        event.preventDefault();
        let nName = prompt("Please enter in a chat name",`Anon${(Math.random() * 999)}`);
        setName({name: nName})
      }
      else{
        console.log('else')
        event.preventDefault();
        setChat({ writeError: null });
        try {
          await db.ref("adenvtreon").push({
            content: text.content,
            timestamp: Date(Date.now()),
            name: name.name
          });
          setText({ content: '' });
        } catch (error) {
          setChat({ writeError: error.message });
        }
      }
      }



useEffect(() =>{
    db.ref("adenvtreon").on("value", snapshot => {
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
      <div className="adenvtreon">
        {chat.adenvtreon.map(chat => {
          
        if(chat.name === name.name){
          return <Paper elevation={2} style={{fontFamily: 'Baloo 2, cursive', width:'50%',padding:'5px', paddingBottom: '15px', marginBottom: '15px',backgroundColor: '#add8e6'}} key={chat.timestamp}>{chat.content} 
          <br/>
          <p style={{fontSize: '5px'}}>{chat.name}~ @{chat.timestamp}</p>
          </Paper>
        }
        else{
          return <Paper elevation={2} style={{fontFamily: 'Baloo 2, cursive', width:'50%',padding:'5px', paddingBottom: '15px', marginBottom: '15px'}} key={chat.timestamp}>{chat.content} 
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