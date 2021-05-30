import React from "react";
import { ReactComponent as LinkedInLogo } from "../imgs/linkedin.svg";
import { ReactComponent as CvLogo } from "../imgs/cv.svg";
import { ReactComponent as HomeLogo } from "../imgs/home.svg";
import { ReactComponent as AboutLogo } from "../imgs/question-circle.svg";
import {Link} from 'react-router-dom'
export default function Footer(props) {
  return (
    <footer>
      <div className="footer_content">    
        <ul className="footer_nav">
          <li>
          <Link to='/'>
              <HomeLogo />
              <p>Home</p>
            </Link>
          </li>
          <li>
           <Link to='/about'>
              <AboutLogo />
              <p>About</p>
            </Link>  
          </li>       
        </ul>
      </div>
    </footer>
  );
}
