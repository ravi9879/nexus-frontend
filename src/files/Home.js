import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom';
import img1 from './img1.jpg'
// import { Get_id } from './Get_id';

export default function Studs() {
  const [stud, setstud] = useState([]);
  // const user_id = Get_id();

  const location = useLocation();

  useEffect(() => {  
    axios.get(`http://localhost:300/`).then((res) => {
      alert("hello") ;
      res.send(res.data) ;
      // setstud(res.data);
    })
      .catch(err => console.log(err));
  }, [])


  return (
    <>
      <nav>
        <Link className={`${location.pathname === "/" ? "" : "li"}`} to="/">Log Out</Link>
        {/* <Link className={`${location.pathname === "/delete" ? "" : "li"}`} to="/delete">Delete</Link> */}
        <Link className={`${location.pathname === "/studs" ? "" : "li"}`} to="/studs">Home</Link>
        {/* <Link className={`${location.pathname === "/update" ? "" : "li"}`} to="/update">Update</Link>
        <Link className={`${location.pathname === "/create" ? "" : "li"}`} to="/create">Create</Link> */}
      </nav> 
    </>
  )
}