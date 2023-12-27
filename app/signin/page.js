'use client'
import React from 'react'
import abc from '../page.module.css'
import Header from '../header';
import AXIOS from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function Pagelog(){
  const nav=useRouter();
  const [eml,setEml]=useState("");
  const [passw,setPassw]=useState("");


  const logIn=(e)=>{
      e.preventDefault();
      alert("buttonclick")
      const url="http://localhost:8081/route/userlogin"
      AXIOS.post(url,{eml,passw}).then((res)=>{
          setEml("")
          setPassw("")
          if(res.data.success==true){
          alert(res.data.message)
          nav.push("/Addtask")
          } else{
            alert("incorrect email or password")
          }
      })
  }
  
  return (
    <>
    <Header/>
    <div className={abc.main_box}>
      <div className={abc.head}>
        <h2>Sign in to your account</h2>
        <p>to add your task</p>
      </div>
    <div className={abc.logbox}>
      <form onSubmit={logIn}>
    <div className={abc.form2}>
            <label className={abc.formlabel2}>Email address</label>
            <input onChange={(e)=>setEml(e.target.value)} className={abc.forminput1} type='email'></input>
            </div>
            <div className={abc.form2}>
            <label className={abc.formlabel2}>Password</label>
            <input onChange={(e)=>setPassw(e.target.value)} className={abc.forminput1} type='Password'></input>
            </div>
            <div className={abc.check}>
              <input className={abc.checkb} type='checkbox'></input>
              <p>Remember me</p>
            </div>
            <div>
              <button className={abc.btn}>Sign In</button>
            </div>
            <div className={abc.already}>
              <a href='/Signup'>New here? Register</a>
              
            </div>
      

            </form>
    </div>
    
    </div>
    </>
  )
}

export default Pagelog;
