import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminHome.css";
import NavbarProfile from "../navbarProfile/NavbarProfile";
import { Button } from "@mui/material";

const AdminHome = () => {
    
    const navigate = useNavigate();

    const logOut = (e) =>{
        e.preventDefault();
        localStorage.clear();
        navigate('/');
    }

  return (
    <div>
    <NavbarProfile/>
      <body>
      <div className="inicioAdmin">
      <header class="content header">
        <h2 class="title">Bienvenido Administrador</h2>
        <p>
        Seleccione lo que desee visualizar
        </p>

        <div class="btn-home">
        <Link to={"/empresas"} style={{textDecoration: 'none'}} >
          <Button variant="outlined" sx={{color: '#fff', border: 2.5}} >
                  <a >Ver Empresas Registradas</a>
          </Button>
      </Link>
      <Link to={"/registerCompany"} style={{textDecoration: 'none'}} >
        <Button variant="outlined" sx={{color: '#fff', border: 2.5}} >
        <a >Registrar Empresa</a>
        </Button>
      </Link>
        </div>
    </header>
          <div className="box-container">
            <div className="box">
              <h3>Ver/Registrar Usuario</h3>
              <p>
                Puede agregar un nuevo usuario o ver los usuarios registrados
              </p>
            </div>
            <div className="box">
              <h3>Ver/Registrar Empresa</h3>
              <p>
                Puede agregar una nueva empresa o ver las empresas ya
                registradas
              </p>
            </div>
            <div className="box">
              <h3>Ingresar como usuario normal</h3>
              <p>Ingresa al programa como un usuario normal</p>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default AdminHome;
