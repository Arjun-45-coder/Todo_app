import React from 'react'
import sty from './page.module.css'
import Page from './Signup/page';
import Pagelog from './signin/page';
import Task from './Addtask/page';


function Header() {
  return (
    <div className={sty.main}>
    <div className={sty.navs}>
      <div className={sty.title}>
        <p>TODO APP</p>
      </div>
      <div className={sty.navas}>
      <div className={sty.navitems}>
        <a href=''>Home</a>
      </div>
      <div className={sty.navitems}>
        <a href=''>Profile</a>
      </div>
      <div className={sty.navitems}>
        <a href='/signin'>Login</a>
      </div>
      </div>
      

      
    </div>
    
    
    </div>
    
   
  )
}

export default Header;
