import React from 'react';
import logo from '../logo.png';
// Font asweosme import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container">
  <a className="navbar-brand" href="#"> <img className="MyLogo" src={logo} alt="My brand logo"/> </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<FontAwesomeIcon icon = {faBars} style ={{color:'#fff'}}  />

</button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"> Projects</a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="#">Contact me</a>
      </li>
    
    </ul>
    <form className="form-inline my-2 my-lg-0">
    </form>
  </div> </div>
</nav>
    )
}

export default Navbar
