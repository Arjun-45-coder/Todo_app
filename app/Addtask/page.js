'use client'
import React from 'react'
import Header from '../header';
import abc from '../page.module.css'
import { useState } from 'react';
import AXIOS from 'axios'
import Allrecords from '../Allrecord';




function Task() {
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")

  const addData=()=>{
    const url="http://localhost:8081/route/taskreg/";
    AXIOS.post(url,{title,description}).then((res)=>{
      alert(res.data)
    })
  }
 
  return (
    <>
    <Header/>
    <div className={abc.main_box}>
        <div >
        <form onSubmit={addData}>
        
            <input onChange={(e)=>setTitle(e.target.value)} className={abc.tit} type='text' placeholder='Title'></input>
            <input  onChange={(e)=>setDescription(e.target.value)} className={abc.tit1} type='text' placeholder='Description'></input><br></br>
            <button type='submit' className={abc.butt}>ADD TASK</button>
            </form>
           
        </div>
        <div>
          <Allrecords/>
  
        </div>
        

    </div>
    </>
  )
}

export default Task;
