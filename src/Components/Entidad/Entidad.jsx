import React, { useState, useEffect } from "react";
import "./Entidad.css";
import { url } from "../axiosConnect";
import Axios from "axios";
import Navbar from "../navbar/Navbar";
import Swal from "sweetalert2";

const Entidad = () => {
  const [entidad, setEntidad] = useState({
    NITEntidad: "",
    nombreEntidad: "",
  });

  const [entidades, setEntidades] = useState([]);

  const handleEntidad = (e) => {
    const { name, value } = e.target;
    setEntidad({
      ...entidad,
      [name]: value,
    });
  };

  const headers = {
    headers: {
      Authorization: `${JSON.parse(localStorage.getItem("token"))}`,
    },
  };

  const registerEntidad = (e) => {
    e.preventDefault();
    Axios.post(url + "entidad/newEntity", entidad, headers)
      .then((res) => {
        e.target.reset();
      })
      .catch((err) => {
         Swal.fire({
          position: "center",
          icon: "error",
          color: "white",
          background: "rgba(0,0,0,0.9)",
          title: err.response.data.message,
          timer: 3000,
          imerProgressBar: true,
          toast: true,
          showCancelButton: false,
          showConfirmButton: false,
        });
      });
  };

  useEffect(() => {
    Axios.get(url + "entidad/entities", headers)
      .then((res) => {
        setEntidades(res.data.resul);
      })
      .catch((err) => {
      });
  }, [entidades]);

  return (
    <div style={{ backgroundColor: "#5DADE2" }}>
      <div>
        <Navbar />
      </div>
      <body style={{ backgroundColor: "#5DADE2" }}>
        <div className="container my-3">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 py-4">
              <form onSubmit={registerEntidad} >
                <h2>Entidad</h2>
                <div className="mb-3">
                  <label className="form-label">Nit Entidad</label>
                  <input
                    type="text"
                    className="form-control"
                    id="NITEntidad"
                    name="NITEntidad"
                    onChange={handleEntidad}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Nombre Entidad</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombreEntidad"
                    name="nombreEntidad"
                    onChange={handleEntidad}
                    required
                  />
                </div>
                <div className="d-grid gap-2">
                  <button className="btn btn-success">
                    Guardar
                  </button>
                </div>
              </form>
              <div className="btn-home"></div>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 py-4 ">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="list"
                  role="tabpanel"
                  aria-labelledby="list-tab"
                >
                  <div className="card">
                    <div className="card-header">
                      <h4>Entidades</h4>
                    </div>
                    <table
                      id="userList"
                      className="table table-bordered table-hover table-striped"
                    >
                      <thead className="thead-light">
                        <tr>
                          <th className="centrado">Nit Entidad</th>
                          <th className="centrado">Nombre Empresa</th>
                        </tr>
                      </thead>
                      {entidades.map((newEnti, index) => {
                        return (
                          <tbody key={index} >
                            <tr >
                              <td className="centrado">
                                {newEnti.NITEntidad}
                              </td>
                              <td className="centrado">{newEnti.nombreEntidad}</td>
                            </tr>
                          </tbody>
                        );
                      })}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Entidad;