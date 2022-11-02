import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbarHome.css";

function NavbarHome() {
  return (
    <nav className="nav">
      <Link to="/login">
        <Button variant="contained" >Iniciar Sesiòn</Button></Link>
    </nav>
  );
}

export default NavbarHome;
