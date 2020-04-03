import React, {useState,useRef} from 'react';
import axios from 'axios';
import Messenger from '../Services/messanger'
import { auth } from '../Services/firebase';

function Uploader(){
  const myRef = useRef({selectedFile: null});
  const [ip, setIp] = useState('localhost:3001')

  //handler for uploading of files using Axios
  function uploadHandler() {
      let upload = myRef.current.files[0]
    if (upload === undefined){
      alert(`Please Select a File for Upload`)
      return
    }else{
      let uName = document.getElementById("uName").value
      let uData = {name: uName, address: upload.name}
      const formData = new FormData()
      formData.append(
        'myFile',
        upload,
        upload.name
      )
      axios.post(`http://${ip}/api/data/user`, uData).then(function (res){
        console.log(res.status);
        console.log(uData);
      })
      axios.post(`http://${ip}/api/data/upload`, formData).then(function (res){
          if (res.status === 200){
            alert("File uploaded");
            window.location.reload(false);
        }
      })
    } 
  }
return(
<div style={{marginLeft: 20}}>Home <p>Please Upload your files here</p>
      <input type="file" ref={myRef}/>
      <p style={{opacity: 0.9}}>&nbsp;User&nbsp;<input id="uName" type="text"/>&nbsp; 
    <button onClick={() => {uploadHandler()}}>Upload!</button></p>
   
<Messenger room={'tofu'} child={true} />
    </div>
)







}
export default Uploader