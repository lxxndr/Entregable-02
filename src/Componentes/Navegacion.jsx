import React from "react";
import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import '../style/Navegacion.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {CgProfile} from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import logo from '../img/Logo.png';

function Navegacion() {
  const navRef = useRef();
  const navigate = useNavigate();

  const handleIconClick = () => {
    navigate('/LoginModal');}

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <header id="inicio">
      <img className="logo" src={logo} alt="" />
      <nav>
        <a href="/#inicio">Inicio</a>
        <a href="/#conocenos">Conocenos</a>
        <a href="/#destinos">Destinos</a>
        <a href="/#consultas">Consultas</a>
        <a href="/login"><CgProfile className="profile" onClick={handleIconClick}/></a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes/>
        </button>
      </nav>
      
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
  );
}

export default Navegacion;
