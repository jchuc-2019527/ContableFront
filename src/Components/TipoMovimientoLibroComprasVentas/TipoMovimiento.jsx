import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./TipoMovimiento.css";
import { url } from "../axiosConnect";
import Axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../navbar/Navbar";

const TipoMovimiento = () => {
  return (
    
    <div style={{backgroundColor: "#5DADE2"}}>
        <Navbar/>
      <body style={{backgroundColor: "#5DADE2"}}>
        <div className="container my-3">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 py-4">
              <h2>Nuevo Activo</h2>
              <div class="mb-3">
                                <label class="form-label">Descripcion Movimiento</label>
                                <input type="text" class="form-control" id="descripcionMovimiento" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Tipo Libro</label>
                            <input type="text" class="form-control" id="tipoLibro" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Tipo Movimiento</label>
                            <input type="text" class="form-control" id="tipoMovimiento" />
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
                                                    <th className="centrado">Saldo Inicial D</th>
                                                    <th className="centrado">Saldo Inicial H</th>
                                                    <th className="centrado">Monto Debe</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="centrado">5215</td>
                                                    <td className="centrado">4856</td>
                                                    <td className="centrado">5462</td>
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

export default TipoMovimiento