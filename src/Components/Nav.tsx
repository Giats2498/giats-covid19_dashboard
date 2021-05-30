import React, { useState } from "react";
import { ReactComponent as SiteLogo } from "../imgs/site-logo.svg";
import { ReactComponent as NavButton } from "../imgs/bars.svg";
import {Link} from 'react-router-dom'

export default function NavBar(props) {

  const [menuState,setMenu] = useState('closed_menu')

  function flipMenu(){
    setMenu(menuState === 'closed_menu' ? 'open_menu' : 'closed_menu')
  }

  return (
    <nav>
      <div className="nav_content">
        <SiteLogo />
        <h3 className="site_title">COVID-19 Dashboard</h3>
        <button className="nav_button"  onClick={flipMenu}>
         <NavButton  />
        </button>
       

        {/* movile menu expanded */}
        <div className={`menu ${menuState}`}>
          <div className='menu_content'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            
            <li><Link to='/about'>About</Link></li>
            
          </ul>
          <p style={{marginBottom: '20px'}}>A React COVID-19 Dashboard</p>
          </div>
         
        </div>
      </div>
    </nav>
  );
}
