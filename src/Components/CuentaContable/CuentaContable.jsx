import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CuentaContable.css";
import { url } from "../axiosConnect";
import Axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../navbar/Navbar";


const CuentaContable = () => {
  return (
    <div>
        <div>
        <Navbar/>
        </div>
      <body>
        <div className="container my-3">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 py-4">
              <h2>Nueva Cuenta</h2>
              <div className="mb-3">
                                <label className="form-label">Nombre Cuenta Contable</label>
                                <input type="text" className="form-control" id="monto" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Tipo Cuenta Contable</label>
                            <input type="text" className="form-control" id="monto" />
                        </div>
                        <div className="mb-3">
                            <label class="form-label">Padre Cuenta Contable</label>
                            <input type="text" class="form-control" id="padreCuentaContable" />
                        </div>
                        <div className="mb-3">
                            <label  class="form-label">Nivel Cuenta Contable</label>
                            <input type="number" class="form-control" id="nivelCuentaContable" />
                        </div>
                        <div className="mb-3">
                            <label  class="form-label">Recibe Partida Cuenta Contable</label>
                            <input type="number" class="form-control" id="recibePartidaCuentaCont" />
                        </div>
                <div className="d-grid gap-2">
                  <button className="btn btn-success">Guardar</button>
                </div>
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
                      <h4>Cuenta Contable</h4>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table
                          id="userList"
                          className="table table-bordered table-hover table-striped"
                        >
                          <thead className="thead-light">
                          <tr>
                                                    <th className="centrado">Nombre Cuenta Contable</th>
                                                    <th className="centrado">Tipo Cuenta Contable</th>
                                                    <th className="centrado">Padre Cuenta Contable</th>
                                                    <th className="centrado">Nivel Cuenta Contable</th>
                                                    <th className="centrado">Recibe Partida Cuenta Contable</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="centrado">5215</td>
                                                    <td className="centrado">4856</td>
                                                    <td className="centrado">5462</td>
                                                    <td className="centrado">2654</td>
                                                    <td className="centrado">56445</td>
                    
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
      )
}

export default CuentaContable