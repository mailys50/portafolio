import React from 'react';
import logoPortafolio from '../logoPortafolio.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';


function Navbar() {
    return (
     <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container">
  <a className="navbar-brand" href="#"> <img className='logo' src={logoPortafolio} alt='logo'  />
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    {/* <span className="navbar-toggler-icon"></span> */}
    <FontAwesomeIcon icon={faBars} style={{ color:"#9e6e07"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item active">
       <a className="nav-link" href="#">Home {/* <span className="sr-only">(current)</span>*/}</a> 
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">How work</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Portafolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contactos</a>
      </li>
      
    </ul>

  </div>
  </div>
</nav>
    )
}

export default Navbar
