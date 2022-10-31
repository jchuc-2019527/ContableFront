import React, { useState, useEffect } from "react";
import "./ImpuestoAdicional.css";
import { url } from "../axiosConnect";
import Axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../navbar/Navbar";

const ImpuestoAdicional = () => {
  const [impuestos, setImpuestos] = useState([]);
  const [data, setData] = useState({
    nombreImpuesto: " ",
    descripcionImpuesto: " ",
    valorImpuesto: " ",
  });

  const headers = {
    headers: {
      Authorization: `${JSON.parse(localStorage.getItem("token"))}`,
    },
  };

  useEffect(() => {
    Axios.get(url + "impuesto/taxes", headers)
      .then((res) => {
        console.log("Vienen los impuestos", res.data.result);
        setImpuestos(res.data.result);
      })
      .catch((err) => {
        console.log("Viene el error", err);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const agregar = (e) => {
    e.preventDefault();
    Axios.post(url + "impuesto/newImpuesto", data, headers)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon:'success',
          color: "white",
          background: "rgba(0,0,0,0.9)",
          title: "Impuesto agregado satisfactoriamente",
          timer: 5000,
          backdrop: true,
          timerProgressBar: true,
          toast: true
        });
        e.target.reset();
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon:'warning',
          color: "white",
          background: "rgba(0,0,0,0.9)",
          title: err.response.data.message,
          timer: 4000,
          backdrop: true,
          timerProgressBar: true,
          toast: true
        });
      });
  };

  return (
    <div style={{backgroundColor: "#5DADE2"}}>
        <div>
        <Navbar/>
        </div>
      <body style={{backgroundColor: "#5DADE2"}}>
        <div className="container my-3">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 py-4">
              <h2>Nuevo Impuesto</h2>
              <form onSubmit={agregar}>
                <div className="mb-3">
                  <label className="form-label">Nombre Impuesto</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombreImpuesto"
                    name="nombreImpuesto"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Descripcion impuesto</label>
                  <input
                    type="text"
                    className="form-control"
                    id="descripcionImpuesto"
                    name="descripcionImpuesto"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Valor Impuesto</label>
                  <input
                    type="text"
                    className="form-control"
                    id="valorImpuesto"
                    name="valorImpuesto"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="d-grid gap-2">
                  <button className="btn btn-success">Guardar</button>
                </div>
                <div className="btn-home"></div>
              </form>
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
                      <h4>Impuesto Adicional</h4>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table
                          id="userList"
                          className="table table-bordered table-hover table-striped"
                        >
                          <thead className="thead-light">
                            <tr>
                              <th className="centrado">Nombre Impuesto</th>
                              <th className="centrado">Descripcion Impuesto</th>
                              <th className="centrado">Valor Impuesto</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="centrado">IVA</td>
                              <td className="centrado">IVA de un producto</td>
                              <td className="centrado">4856</td>
                            </tr>
                          </tbody>
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

export default ImpuestoAdicional;
