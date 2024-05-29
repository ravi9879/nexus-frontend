import React , { useState} from 'react'
import axios from 'axios'
import {Link, useNavigate } from 'react-router-dom';

export default function Lo() {
    const [name , setname] = useState('') ;
    const [email_id , setemail_id] = useState('') ;
    const [password , setpassword] = useState('') ;
   
    const navigate = useNavigate() ;
    const submission = async (event) => { 
      console.log(name , email_id) ;
      event.preventDefault() ;
      try{
        
        await axios.post('http://localhost:300/sign-in/', {email_id : email_id , name : name , password : password} ) 
        .then(res => {  
          // alert(res.data) ;
          if (res.data.Status === "Success") {
            alert(res.data); 
            // window.localStorage.setItem("token" , res.data.token) ; 
            // document.cookie= res.data.token;
            // navigate('/studs');
          }
          else {
            alert(res.data) ;
            // console.log(res.data) ;
            // navigate('/si'); 
          }
        }) ;
          // navigate('/');
      }
      catch(err){
        alert("Internal Error") ;
        console.log("error") ;
      }
    }

    const save_id = (event)=> { 
      setemail_id(event.target.value); 
    } 

    const save_name = (event)=> { 
      setname(event.target.value); 
    } 
 
    const save_password = (event)=> { 
      setpassword(event.target.value); 
    }  
    
  return (
      <> 
        <form onSubmit={submission} className='form' >
          <div>
            <p id="s">EMAIL-ID : <textarea rows={1} type="text" name="email_id" placeholder="enter your email id" onChange={save_id } /></p>
            <p className="s">NAME : <textarea rows={1} type="text" name="name" placeholder="enter your name" onChange={ save_name} /></p>
            <p className="s">PASSWORD : <input type="password" name="password" placeholder="enter your password" onChange={ save_password}  /></p> 
            <button className='hover_button'>submit</button>
            <p>Already Registered : <Link to="/" style={{"color" : "blue"}} >PLEASE LOGIN</Link>  </p>
          </div>
        </form>   
      </>
  )
}
