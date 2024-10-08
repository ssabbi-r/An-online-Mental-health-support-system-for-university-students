// RegistrationPage.js

import React, { useState } from 'react';
import css from './Registration.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const RegistrationPage = () => {
  let navigate=useNavigate();
  let [maindata,smaindata]=useState({
    person:'Student',
    fname:'',
    lname:'',
    id:'',
    password:'',
    cpassword:''
  });
  let setval=(e)=>{
    e.preventDefault();
    smaindata(maindata=>({...maindata,[e.target.name]:e.target.value}));
  }
  let registerdata=(e)=>{
    e.preventDefault();
   if(maindata.password===maindata.cpassword){
    axios.post(`http://localhost:8000/${maindata.person}/register`,maindata)
    .then((res)=>{
      if(res.data.ok){
        navigate(`/login/${maindata.person}`)
      }
      else{
        alert('Registration is not sucessfull');
      }
    })
   }
   else{
    alert('Password does not match');
   }
    
  }
  return (
    <div style={{display:'flex',width:'100%',height:'100dvh',justifyContent:'center',alignItems:'center'}}>
       <div className={css.registrationcontainer}>
      
        <img src="data:image/png;base64,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" alt="University Logo" className="registration-logo" />
      
      <div className={css.registrationuniversityname}>University of Rajshahi</div>
      <form className={css.registrationform} onSubmit={registerdata}>
         <select name='person' onChange={setval}>
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
        </select>
        <input onChange={setval} name='fname' type="text" placeholder="First Name" required />
        <input onChange={setval} name='lname' type="text" placeholder="Last Name" required />
       
        <input type="text" onChange={setval} name='id' placeholder="ID" required />
        <input type="password" onChange={setval} name='password' placeholder="Password" required />
        <input type="password" onChange={setval} name='cpassword' placeholder="Confirm Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
    </div>
   
  );
};

export default RegistrationPage;
