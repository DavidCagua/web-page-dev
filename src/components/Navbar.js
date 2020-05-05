import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css';
import logo from '../images/logo1.png';
import Github from '../images/social-media.svg';
import Linkedin from '../images/linkedin.svg';
import Twitter from '../images/twitter.svg';

class Navbar extends React.Component {
  render() {
    return (
      <header>
        <section className="header-icons-container">
            <div className="icons">
                <a href="https://github.com/DavidCagua"><img src={Github} alt="Logo de github"/></a>
                <a href="https://www.linkedin.com/in/david-felipe-caguazango-pulistar-9ab38010a/"><img src={Linkedin} alt="Logo de github"/></a>
                <a href="https://twitter.com/davidfelipe_cp"><img src={Twitter} alt="Logo de github"/></a>
            </div>
        </section> 
        <div className="Navbar">  
            <section className="Navbar-logo-container">
            <Link to="/">
                <img src={logo} alt="Logo" />
            </Link>
            </section>
            <section className="Navbar-profile-link-container">
            <Link to="/Profile">
                <span>About me</span>
            </Link>
            </section>
        </div>
      </header>  

    );
  }
}

export default Navbar;