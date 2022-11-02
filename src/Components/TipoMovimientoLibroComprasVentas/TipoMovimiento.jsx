import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./TipoMovimiento.css";
import { url } from "../axiosConnect";
import Axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../navbar/Navbar";

const TipoMovimiento = () => {
  const headers = {
    headers: {
      Authorization: `${JSON.parse(localStorage.getItem("token"))}`,
    },
  };
   const navigate = useNavigate();
  const [movimientos, setMovimientos] = useState([]);
  const [tipoMovimiento, setTipoMovimiento] = useState({
    nombreMovimineto: "",
    tipoLibro: "",
    tipoMovimiento: "",
  });

  useEffect(() => {
    Axios.get(url + "tipoMovimiento/movements", headers)
      .then((res) => {
        setMovimientos(res.data.resu);
      })
      .catch((err) => {});
  }, [movimientos]);


  const handleTipoMovimiento = (e) => {
    const { name, value } = e.target;
    setTipoMovimiento({
      ...tipoMovimiento,
      [name]: value,
    });
  };

  const agregarMovimiento = (e) => {
    e.preventDefault();
    Axios.post(url + "tipoMovimiento/newTipoMov", tipoMovimiento, headers)
      .then((res) => {
        e.target.reset();
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "warning",
          color: "white",
          background: "rgba(0,0,0,0.9)",
          title: err.response.data.Message,
          timer: 4000,
          timerProgressBar: true,
          toast: true,
        });
      });
  };

  return (
    <div style={{ backgroundColor: "#5DADE2" }}>
      <Navbar />
      <body style={{ backgroundColor: "#5DADE2" }}>
        <div className="container my-3">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 py-4">
              <h2>Nuevo Activo</h2>
              <form onSubmit={agregarMovimiento}>
                <div className="mb-3">
                  <label className="form-label">Nombre Movimiento</label>
                  <input
                    onChange={handleTipoMovimiento}
                    type="text"
                    className="form-control"
                    id="descripcionMovimiento"
                    name="nombreMovimiento"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Tipo Libro</label>
                  <input
                    onChange={handleTipoMovimiento}
                    id="tipoLibro"
                    type="text"
                    className="form-control"
                    name="tipoLibro"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Tipo Movimiento</label>
                  <input
                    onChange={handleTipoMovimiento}
                    type="text"
                    className="form-control"
                    id="tipoMovimiento"
                    name="tipoMovimiento"
                    required
                  />
                </div>
                <div className="d-grid gap-2">
                  <button className="btn btn-success">Guardar</button>
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
                      <h4>Activo Fijo</h4>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table
                          id="userList"
                          className="table table-bordered table-hover table-striped"
                        >
                          <thead className="thead-light">
                            <tr>
                              <th className="centrado">Nombre Movimiento</th>
                              <th className="centrado">Tipo Libro</th>
                              <th className="centrado">Tipo Movimiento</th>
                            </tr>
                          </thead>
                          {movimientos.map((movimientos, index) => {
                            return (
                              <tbody key={index}>
                                <tr>
                                  <td className="centrado">{movimientos.nombreMovimiento}</td>
                                  <td className="centrado">{movimientos.tipoLibro}</td>
                                  <td className="centrado">{movimientos.tipoMovimiento}</td>
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
          </div>
        </div>
      </body>
    </div>
  );
};

export default TipoMovimiento;
