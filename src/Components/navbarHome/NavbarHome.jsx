import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbarHome.css";

function NavbarHome() {

  return (
    <nav className="nav">
      <a className="nav__brand">
        <Link to='/login'>
        Iniciar Sesiòn
        </Link>
      </a>
    </nav>
  );
}

export default NavbarHome;