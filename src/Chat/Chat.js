// src/components/ChatComponent.js
import React, { useEffect, useState } from 'react';
import styles from './ChatPage.module.css'; // Import your CSS module
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Chat = () => {
  let {tid,sid,person}=useParams();
  let [ms,sms]=useState('');
  let [allmessage,sallmessage]=useState([]);
  
  let [re,sre]=useState(0);
  let send=()=>{
      if(person=="student"&& ms!=''){
       
        allmessage.push(ms);
        sallmessage(allmessage=>([...allmessage]));
       
      axios.post(`http://localhost:8000/send/student`,{
        tid,
        sid,
        mess:allmessage
      })
      .then((res)=>{
        if(res.data.ok){
            
            sallmessage(res.data.student);
            sre(re=>re+1);
        }
      })
    }
    else if(ms!=''){
        allmessage.push(ms);
        sallmessage(allmessage=>([...allmessage]));
     
      axios.post(`http://localhost:8000/send/teacher`,{
        tid,
        sid,
        mess:allmessage
      })
      .then((res)=>{
        if(res.data.ok){
            
            sallmessage(res.data.teacher);
            sre(re=>re+1);
        }
      }) 
    }
  }
  
  useEffect(()=>{
   axios.post(`http://localhost:8000/get/message`,{
    tid,
    sid,
   })
   .then((res)=>{
    console.log(res.data);
    if(res.data.ok){
       
        sallmessage(res.data.list);
    }
   })
  },[re]);
  return (
    <div className={styles.mainchatbox}>
        <div >
        <div style={{width:'400px',height:'700px',border:'5px solid black'}}>
        {allmessage && allmessage.map((it,i)=>{
            
            if(person=="student"){
                return <div key={i} style={{color:'red'}}>
                {it[0]=='L'?<div style={{color:'red',width:'100%',height:'40px',left:'0px',textAlign:'right'}}>{it.substring(1)}</div>:<div style={{color:'blue',width:'100%',right:'0px',height:'40px',display:'block',textAlign:'left'}}>{it.substring(1)}</div>}
                   
              </div>
            }
           else{
            return <div key={i} style={{color:'red'}}>
            {it[0]=='R'?<div style={{color:'red',width:'100%',height:'40px',left:'0px',textAlign:'right'}}>{it.substring(1)}</div>:<div style={{color:'blue',width:'100%',right:'0px',height:'40px',display:'block',textAlign:'left'}}>{it.substring(1)}</div>}
               
          </div>
           }
        })
        }
       
      </div>
        </div>
     
      
      <input type='text' onChange={(e)=>{
        if(person=='student'){
            sms('L'+e.target.value);
        }
       else{
        sms('R'+e.target.value);
       }
      }}/>
      <button onClick={send}>send</button>
    </div>
  );
};

export default Chat;
