import React, { useState } from "react";
import "./RegisterEmpresa.css";
import Axios from "axios";
import Swal from "sweetalert2";
import { url } from "../axiosConnect";
import { Link, useNavigate } from "react-router-dom";
import "./RegisterEmpresa.css";

const RegisterEmpresa = () => {
  const navigate = useNavigate();
  const [company, setCompany] = useState({
    nombreEmpresa: "",
    nombreComercial: "",
    direccionEmpresa: "",
    NITEmpresa: "",
    porcentajeIva: "",
  });

  const headers = {
    headers: {
      Authorization: `${JSON.parse(localStorage.getItem("token"))}`,
    },
  };

  const handleEmpresa = (e) => {
    const { name, value } = e.target;
    setCompany({
      ...company,
      [name]: value,
    });
  };


  const agregarEmpresa = (e) => {
    e.preventDefault();
    Axios.post(url + "empresaMaestro/newEmpresaMaestro", company, headers)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          color: "white",
          background: "rgba(0,0,0,0.9)",
          title: "Empresa registrada",
          timer: 5000,
          timerProgressBar: true,
          toast: true,
        });
        e.target.reset();
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "warning",
          color: "white",
          background: "rgba(0,0,0,0.9)",
          title: err.response.data.message,
          timer: 4000,
          timerProgressBar: true,
          toast: true,
        });
      });
  };

  return (
    <body className="register">
      <div className="container">
        <div className="form first">
          <form onSubmit={agregarEmpresa}>
            <div className="details personal">
              <span className="title">Agregar nueva Empresa</span>

              <div className="fields">
                <div className="input-field">
                  <label>Nombre Empresa</label>
                  <input
                    type="text"
                    placeholder="Ingrese el nombre"
                    id="nombreEmpresa"
                    name="nombreEmpresa"
                    onChange={handleEmpresa}
                    required
                  />
                </div>

                <div className="input-field">
                  <label>Nombre Comercial</label>
                  <input
                    type="text"
                    placeholder="Ingrese el nombre"
                    id="nombreComercial"
                    name="nombreComercial"
                    onChange={handleEmpresa}
                    required
                  />
                </div>

                <div className="input-field">
                  <label>Direcciòn Empresa</label>
                  <input
                    type="text"
                    placeholder="Ingrese la Direcciòn"
                    id="direccionEmpresa"
                    name="direccionEmpresa"
                    onChange={handleEmpresa}
                    required
                  />
                </div>

                <div className="input-field">
                  <label>NIT Empresa</label>
                  <input
                    type="text"
                    placeholder="Ingrese el NIT"
                    id="NITEmpresa"
                    name="NITEmpresa"
                    onChange={handleEmpresa}
                    required
                  />
                </div>
                <div className="input-field">
                  <label>Porcentaje IVA</label>
                  <input
                    type="number"
                    step="any"
                    placeholder="Ingrese el Porcentaje"
                    id="porcentajeIVA"
                    name="porcentajeIVA"
                    onChange={handleEmpresa}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="buttons">
              <button className="sumbit" >
                <span className="btnText" >Agregar</span>
                <i className="uil uil-navigator"></i>
              </button>
            </div>
          </form>
          <div className="contorno" >
            <Link to='/empresas' >
                        <button className="aaaa" >
              <span className="irempresa">Ver empresas</span>
            </button>
            </Link>

          </div>
        </div>
      </div>
    </body>
  );
};

export default RegisterEmpresa;
