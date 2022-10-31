import React, { useState, useEffect } from "react";
import "./Perfil.css";
import logoP from "../../Shared/img/profile-user.svg";
import { Link } from "react-router-dom";
import Axios from "axios";
import { url } from "../axiosConnect";

const Perfil = () => {
  const [perfil, setPerfil] = useState([]);
  const [company, setCompany] = useState([]);
  const headers = {
    headers: {
      Authorization: `${JSON.parse(localStorage.getItem("token"))}`,
    },
  };

  useEffect(() => {
    Axios.get(url + "user/profile", headers)
      .then((res) => {
        setPerfil(res.data.usuario[0]);
        setCompany(res.data.usuario[1]);
      })
      .catch((err) => {
        console.log(err, "Viene el error");
      });
  }, [perfil, company]);

  return (
<div>
<body className="profile">
      <section className="seccion-perfil-usuario">  
        <div className="perfil-usuario-header">
          <div className="perfil-usuario-portada">
            <div className="perfil-usuario-avatar">
              <img src={logoP} alt="logo" />
            </div>
          </div>
        </div>
        <div className="perfil-usuario-body">
            <div className="perfil-usuario-bio">
                <h3 className="titulo">Nombre</h3>
                <h2>{perfil.nombre}</h2>
            </div>
            <div className="perfil-usuario-footer">
                <ul className="lista-datos">
                    <li><i className="icono fas fa-map-signs"></i> Correo: <h1 className="profi" >{''} {perfil.correo} </h1> </li>
                    <li><i className="icono fas fa-solid fa-user"></i> Username: <h1 className="profi" >{''} {perfil.username}</h1></li>
                    <li><i className="icono fas fa-briefcase"></i> Empresa: <h1 className="profi" >{''} {company.nombreEmpresa}</h1></li>
                  </ul>
            </div>
            <Link to={"/tareas"}>
          <a className="btn">Regresar</a>
        </Link>
        </div>
      </section>
</body>
</div>

  );
};

export default Perfil;