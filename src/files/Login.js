import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 


export default function Lo() {
  const [email_id, setemail_id] = useState('');
  const [password, setpassword] = useState(''); 
  

  const navigate = useNavigate();

  const submission = (event) => {

    event.preventDefault();
    try {
      axios.post('http://localhost:300/login/', { email_id: email_id, password: password }) 
        .then(res => { 
          if (res.data.Status === "Success") {
            alert("Login Successful") ;
            // console.log(res.data.token); 
            // window.localStorage.setItem("token" , res.data.token) ; 
            // document.cookie= res.data.token;
            navigate('/studs');
          }
          else {
            alert(res.data) ;
            // console.log(res.data) ;
            // navigate('/si'); 
          }
        })
    } catch (error) {
      alert("Internal Error") ;
      // console.log('error');
    }

  }

  const save_id = (event) => {
    setemail_id(event.target.value);
  }

  const save_password = (event) => {
    setpassword(event.target.value);
  }

  return (


    <>
      <form onSubmit={submission} className='form' >
        <div>
          <p id="s">EMAIL-ID : <textarea rows={1} type="text" name="email_id" placeholder="enter your email id" onChange={save_id} /></p>
          <p className="s">PASSWORD : <input type="password" name="password" placeholder="enter your password" onChange={save_password} /></p>
          <button className='hover_button'>submit</button>
          <p>Not A User :  <Link to="/si" style={{ "color": "blue" }} >PLEASE SIGN-UP</Link>  </p>
        </div>
      </form>
    </>
  )
}

