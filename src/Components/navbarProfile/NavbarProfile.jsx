import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./navbarProfile.css";
import { Button } from "@mui/material";

function NavbarProfile() {
  const navigate = useNavigate()
    const logOut = (e)=>{
    e.preventDefault();
    localStorage.clear();
    navigate('/')
  }

  return (
    <nav className="nav">

        <Link to='/tareas' style={{textDecoration: 'none'}} >
          <Button onClick={logOut} color="secondary" variant="contained" >Cerrar Sesion</Button>
        </Link>

    </nav>
  );
}

export default NavbarProfile;