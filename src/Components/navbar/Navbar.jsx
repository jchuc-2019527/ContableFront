import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <Button variant="contained" sx={{ color: "white"}}>
        <Link to='/tareas' >
          <Button sx={{color: 'white'}} >Pagina Principal</Button>
        </Link>
      </Button>
    </nav>
  );
}

export default Navbar;
