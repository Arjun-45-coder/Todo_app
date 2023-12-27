'use client'
import React from 'react';
import abc from '../page.module.css';
import Header from '../header';
import AXIOS from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function Page() {
  const nav=useRouter();
    const [user,setUser]=useState("");
    const [last,setLast]=useState("");
    const [eml,setEml]=useState("");
    const [passw,setPassw]=useState("");


    const signIn=(e)=>{
        e.preventDefault();
        alert("buttonclick")
        const url="http://localhost:8081/route/userregistrate"
        AXIOS.post(url,{user,eml,passw,last}).then((res)=>{
            setUser("")
            setLast("")
            setEml("")
            setPassw("")
            alert(res.data)
            nav.push("/signin")
        })
    }

  return (
    <>
    <Header/>
    <div className={abc.main_box}>
   
      <header className={abc.head}>
        <h1>Sign Up</h1>
        <p>to make your time productive</p>
      </header>
      <div className={abc.box}></div>
      <form onSubmit={signIn} className={abc.form}>
        <div className={abc.formgrp}>
          <div className={abc.formRow}>
            <label className={abc.formlabel}>
              First Name
            </label>
            <label className={abc.formlabel1}>
            Last Name
            </label>
          </div>
          <div className={abc.formRow}>
            <input onChange={(e)=>setUser(e.target.value)} className={abc.forminput}type="text"  />
            <input onChange={(e)=>setLast(e.target.value)} className={abc.forminput} type="text"/>
            </div>
            <div className={abc.form2}>
            <label className={abc.formlabel2}>Email address</label>
            <input onChange={(e)=>setEml(e.target.value)} className={abc.forminput1} type='email'></input>
            </div>
            <div className={abc.form2}>
            <label   className={abc.formlabel2}>Password</label>
            <input onChange={(e)=>setPassw(e.target.value)} className={abc.forminput1} type='Password'></input>
            </div>
            <div>
              <button className={abc.btn}>Sign Up</button>
            </div>
            <div className={abc.already}>
              <a href='/signin'>Already a user? Login</a>
              
            </div>
          
        </div>
      </form>
    </div>
    </>
  );
}

export default Page;
