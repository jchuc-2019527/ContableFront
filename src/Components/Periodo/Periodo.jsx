import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Periodo.css";
import { url } from "../axiosConnect";
import Axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../navbar/Navbar";

const Periodo = () => {
  return (
    
    <div style={{backgroundColor: "#5DADE2"}}>
        <div>
        <Navbar/>
        </div>
      <body style={{backgroundColor: "#5DADE2"}}>
        <div className="container my-3">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 py-4">
              <h2>Nuevo Periodo</h2>
              <div className="mb-3">
                            <label className="form-label">Estado Periodo</label>
                            <input type="text" className="form-control" id="estadoPeriodo"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Fecha Inicial</label>
                            <input type="date" class="form-control" id="fechaInicial" />
                        </div>
                        <div class="mb-3">
                            <label className="form-label">Fecha Final</label>
                            <input type="date" className="form-control" id="fechaFinal" />
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
                      <h4>Periodo</h4>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table
                          id="userList"
                          className="table table-bordered table-hover table-striped"
                        >
                          <thead className="thead-light">
                          <tr>
                                                        <th class="centrado">Estado Periodo</th>
                                                        <th class="centrado">Fecha Inicial</th>
                                                        <th class="centrado">Fecha Final</th>
                                                    </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="centrado">1</td>
                                                    <td class="centrado">12/5/2002</td>
                                                    <td class="centrado">21</td>
                    
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

export default Periodo